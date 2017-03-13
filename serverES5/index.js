"use strict";
//var debug = require('debug')('REM:server');

var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var express = require('express');

//const { PORT } = require('./configs')
var PORT = 5000;

var _require = require('./util'),
    normalizePort = _require.normalizePort,
    onError = _require.onError,
    onListening = _require.onListening;

var applyMiddlewares = require('./middlewares');
var api = require('./api');
//const mongo = require('./db')

var app = express();
applyMiddlewares(app);

var port = normalizePort(process.env.PORT || PORT);
app.set('port', port);
app.use(express.static(path.join(__dirname, '..', 'public')));

// web port
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'prod.html'));
});

var server = http.createServer(app);
var io = new socketio(server);
//const models = mongo( MONGOURI )
app.use('/', api(io)); //, models ) )

server.listen(port);
server.on('error', onError(port));
server.on('listening', onListening(server));