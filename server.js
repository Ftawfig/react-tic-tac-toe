require('@babel/register')({
    presets: ["@babel/preset-react", "@babel/preset-env"],
    "plugins": [
        "babel-plugin-transform-scss"
      ]
});

//Create express app
const express = require('express')
const path = require('path');
const app = express();
const cors = require("cors");
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./src/index";

app.use(cors());
  
//Create http server with node HTTP module 
//Pass it the express app and listen on port 8080
const server = require('http').createServer(app);

//Instantiate socket.io and listen on the express/HTTP server
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:8000",
        methods: ["GET", "POST"],
    },
});

function randomBool(){
    const max = 2;
    const min = 0;

    return Math.floor(Math.random() * 2) > 0;
}

app.use(express.static(path.join(__dirname, 'dist')));

app.get("*", (req, res) => {
    let html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    let head = `
        <html>
    `;

    res.send("<!DOCTYPE html>" + head + html );
  });

 server.listen(8000, () => {
    console.log('listening on *:8000');
 });

var players = 0;

// Add a connect listener
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
