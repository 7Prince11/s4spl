const fs = require('fs');
const process = require('process');
const io = require('socket.io')(3000, {
    cors: {
        origin: '*',

    }

})


const log = fs.existsSync('log') && fs.readFileSync('log', 'utf-8');
const messages = log ? JSON.parse(log) : [];
const users = {}

io.on('connection', socket => {

    if (log) {
        socket.emit('load-messages', JSON.stringify(messages))
    }




    socket.on('new-user', userName => {
        users[socket.id] = userName
        socket.emit('user-connected', userName)
        socket.broadcast.emit('user-connected', userName)
        socket.emit('old-messages', JSON.stringify(messages))

    })



    socket.on('send-chat-message', message => {

        messages.push(
            { name: users[socket.id], message: message })
        socket.broadcast.emit('chat-message', { name: users[socket.id], message: message })
        console.log(messages)




    })
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })


})

process.on('SIGINT', () => {

    fs.writeFileSync('log', JSON.stringify(messages));
    process.exit();
})



















