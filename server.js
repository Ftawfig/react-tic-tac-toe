const express = require('express');

const socketIO = require('socket.io')
const path = require('path');
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

        //server.get("/", (req, res) => {
        //    return app.render(req, res, '/', query)
        //});

        server.get('/', (req, res) => {
            console.log(req.headers);
            return handle(req, res);
          });

        server.get('*', (req, res) => {
            return handle(req, res);
          });

        const io = socketIO(server.listen(PORT, err => {
            if (err) throw err;
            console.log(`listening on *${PORT}`);
        })); 

        let players = 0;

        io.on('connection', (socket) => {
            players += 1;
            socket.emit("player_count_change", players);
            console.log(`Client connected. socket.id: ${ socket.id }`);
        
            socket.on("send_turn", (data) => {
                socket.broadcast.emit("receive_turn", data);
            });
        
            // Disconnect listener
            socket.on('disconnect', function() {
                players -= 1;
                socket.emit("player_count_change", players);
                console.log('Client disconnected.');
            });
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });