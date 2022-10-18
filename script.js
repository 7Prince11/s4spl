const socket = io('http://localhost:3000');

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
    appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`)
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

whoJoins.innerHTML = `You jointed us <br> Your name is : ${myname}`