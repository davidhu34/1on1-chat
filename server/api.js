//const ensureLogin = require('connect-ensure-login')
const { Router } = require('express')

const successLog = ( data ) => {
    console.log( 'on query success:\n', data )
}

module.exports = ( io, models ) => {
//    const authenticated = ensureLogin.ensureLoggedIn('/login')
    const router = Router()
    console.log('yo')
    router.get( '/yo', (req, res, next) => {
        console.log('yo')
        res.send( 'yo' )
    })

    io.on('connection', ( socket ) => {
    	console.log('connect client', socket)
    })
    return router
}
