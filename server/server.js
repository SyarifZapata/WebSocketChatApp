const path = require('path');
const http = require('http');
const express = require ('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server).listen(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("new user connected");

    socket.emit('newEmail', {
        from: 'syarif.mathis@gmail.com',
        text: 'Hey Whatsapp',
        createdAt: 123
    });


    //io.emit send message to all users
    io.emit('newEmail', {
        from: 'Hallllooooooooo',
        createdAt:new Date().getTime()
    });

    socket.on('createEmail', (newEmail) => {
       console.log('createEmail', newEmail);

       socket.broadcast.emit('newMessage', {
           from: 'Scooobido bido'
       });
    });

    socket.on('disconnect', function() {
        console.log('user disconnected from server');
    })
});


server.listen(3000, function() {
    console.log('Started on port 3000');
});

