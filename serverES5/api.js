'use strict';

//const ensureLogin = require('connect-ensure-login')
var md5 = require('md5');

var _require = require('express'),
    Router = _require.Router;

var iot = require('./iot');

module.exports = function (io, models) {
    //    const authenticated = ensureLogin.ensureLoggedIn('/login')
    var router = Router();
    router.get('/yo', function (req, res, next) {
        console.log('yo');
        res.send('yo');
    });

    io.on('connection', function (socket) {
        console.log('connect client');
        socket.on('MESSAGE', function (msg) {
            console.log('received msg:', msg);
            iot.publish('iot-2/evt/web/fmt/json', JSON.stringify({ d: { "data": "hi" } }));

            var reply = "machine reply";
            io.emit('MESSAGE', {
                local_id: md5(JSON.stringify(msg) + reply),
                sender: 'watson',
                room: 'watsonroom',
                message: reply,
                time: new Date()
            });
        });
    });
    return router;
};