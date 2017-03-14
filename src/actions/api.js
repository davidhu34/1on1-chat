import io from 'socket.io-client'

const socket = io('http://localhost:5000')
//const socket = io('http://119.81.236.205:5000')

const newMsg = msg => {
    const payload = {
        ...msg,
        message: msg.message.replace('\n','')
    }
    console.log('emit', payload)
    socket.emit('MESSAGE', payload)
}

const api = (dispatch) => {
    socket.on( 'connect', () => {
        console.log('socket connected')
        dispatch({
            type: 'SOCKET_CONNECT'
        })
    })

    socket.on('MESSAGE', (msg) => {
        console.log('received message', msg)
        dispatch({
            type: 'NEW_MESSAGE',
            ...msg
        })
    })
}
export { api, newMsg }
