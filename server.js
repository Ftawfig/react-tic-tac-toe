const express = require('express');
const { parse } = require('url')
const socketIO = require('socket.io')
const next = require("next");
const cors = require("cors");

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const PORT = 3000;

//const app = express();
const app = next({ dev, hostname, PORT });
const handle = app.getRequestHandler();

//import ReactDOMServer from "react-dom/server";
//import App from "./src/index";

function randomBool(){
    const max = 2;
    const min = 0;

    return Math.floor(Math.random() * 2) > 0;
}

app
    .prepare()
    .then(() => {
        const server = express();
        
        server.use(cors());

        server.get('/multiplayer', (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { pathname, query } = parsedUrl;
            console.log(parsedUrl);

            console.log(query.gameId);
            return handle(req, res, '/multiplayer', query);
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });
        
        const io = socketIO(server.listen(PORT, err => {
            if (err) throw err;
            console.log(`listening on *${PORT}`);
        })); 


        io.on('connection', (socket) => {
            console.log(`Client connected. socket.id: ${ socket.id }`);
        
            //listen for room join event
            socket.on('join', (gameId) => {
                console.log(`Client joined gameId: ${ gameId }`);
                socket.join(gameId);

                //listen for turn
                socket.on("send_turn", (data) => {
                    console.log("received turn");
                    //emit turn data to the room
                    socket.broadcast.to(gameId).emit("receive_turn", data);
                });
            });
            
            // Disconnect listener
            socket.on('disconnect', function() {
                console.log('Client disconnected.');
            });
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });