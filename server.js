//Create express app
const express = require('express')
const path = require('path');
const app = express();
  
//Create http server with node HTTP module 
//Pass it the express app and listen on port 8080
const server = require('http').createServer(app);

//Instantiate socket.io and listen on the express/HTTP server
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'build')));

//express hello world
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

 server.listen(3000, () => {
    console.log('listening on *:3000');
 });

// Add a connect listener
io.on('connection', (socket) => {
    console.log('Client connected.');
    socket.emit('connection', null);

    // Disconnect listener
    socket.on('disconnect', function() {
        console.log('Client disconnected.');
    });
});
