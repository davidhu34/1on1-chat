//const ensureLogin = require('connect-ensure-login')
const md5 = require('md5')
const { Router } = require('express')

const successLog = ( data ) => {
    console.log( 'on query success:\n', data )
}

module.exports = ( io, models ) => {
//    const authenticated = ensureLogin.ensureLoggedIn('/login')
    const router = Router()
    router.get( '/yo', (req, res, next) => {
        console.log('yo')
        res.send( 'yo' )
    })

    io.on('connection', ( socket ) => {
    	console.log('connect client')
        socket.on('MESSAGE', (msg) => {
            console.log('received msg:', msg)
            const reply = "machine reply"
            io.emit('MESSAGE', {
                local_id: md5(JSON.stringify(msg)+reply),
                sender: 'watson',
                room: 'watsonroom',
                message: reply,
                time: new Date()
            })
        })
    })
    return router
}
