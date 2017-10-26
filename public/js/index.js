var socket = io();

socket.on('connect', function() {
    console.log('connected to the server');

    socket.emit('createEmail', {
        to: 'syarif.mathis@gmail.com',
        text: 'Wow, its work mother fucker'
    })
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
   console.log('New email', email);
});

socket.on('newMessage' , function(message) {
    console.log(message);
});