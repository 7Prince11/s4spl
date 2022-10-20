const socket = io('https://s4spl.herokuapp.com/');
//change to hosting url
//{ transports: ["websocket"] }

const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const whoJoins = document.getElementById('who-join-us')
const myname = prompt('Wpisz imie')



socket.emit('new-user', myname)




socket.on('old-messages', (messages) => {
    console.log(messages)
    appendMessages(JSON.parse(messages))
})


socket.on('chat-message', data => {
    const message = data
    appendMessage(`${message.name}: ${message.message}`)
})


socket.on('user-connected', name => {
    appendMessage(`${name} połączony`)
})

socket.on('user-disconnected', name => {
    appendMessage(`${name} odłączony`)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage(`${myname}: ${message}`)
    socket.emit('send-chat-message', message)
    console.log(message)
    messageInput.value = ''
})
function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerHTML = message
    messageContainer.append(messageElement)
}

function appendMessages(messages) {
    for (let a = 0; messages.length > a; a++) {
        appendMessage(messages[a][`name`] + ' : ' + messages[a][`message`])
    }
}

whoJoins.innerHTML = `Witamy w naszym chacie <br> Nazywasz się : ${myname}`