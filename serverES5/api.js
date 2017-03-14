'use strict';

//const ensureLogin = require('connect-ensure-login')
var md5 = require('md5');

var _require = require('express'),
    Router = _require.Router;

var OpenCC = require('opencc');
var opencc = new OpenCC('s2twp.json');

var iot = require('./iot');

var users = {};

module.exports = function (io, models) {
    //    const authenticated = ensureLogin.ensureLoggedIn('/login')
    var router = Router();
    router.get('/yo', function (req, res, next) {
        console.log('yo');
        res.send('yo');
    });

    io.on('connection', function (socket) {
        var id = socket.id;
        console.log('connect client', socket.id);
        users[id] = {};
        users[id].socket = socket;

        socket.on('MESSAGE', function (msg) {
            console.log('received msg:', msg);
            var payload = msg;
            msg.sid = id;
            iot.publish('iot-2/evt/web/fmt/json', JSON.stringify({ d: payload }));

            var reply = "machine reply";
        });

        socket.on('disconnect', function () {
            console.log('disconnect client', id);
            delete users[id];
        });
    });

    iot.on('message', function (t, p) {
        console.log('t:', t, 'p:', JSON.parse(p));
        var payload = JSON.parse(p);
        var msg = opencc.convertSync(payload.message).replace(/\s/g, '');
        users[payload.sid].socket.emit('MESSAGE', {
            local_id: md5(JSON.stringify(payload)),
            sender: 'watson',
            room: 'watsonroom',
            message: msg,
            time: new Date()
        });
    });

    return router;
};