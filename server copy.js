const express = require('express')
const path = require('path');
const app = express();
const cors = require("cors");
const next = require("next");

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
