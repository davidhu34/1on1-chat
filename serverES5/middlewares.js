'use strict';

var session = require('express-session');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');

module.exports = function (app) {

    /*app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'jade')*/
    app.use(logger('dev'));
    app.use(session({
        secret: 'secret',
        cookie: {},
        resave: true,
        saveUninitialized: true
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(compression({}));

    /*
        app.use( (req, res, next) => {
            let err = new Error('Not Found')
            err.status = 404
            next( err )
        })
        if ( app.get( 'env' ) === 'development' ) {
            app.use( ( err, req, res, next) => {
                res.status( err.status || 500 )
                res.render( 'error', {
                    message:    err.message,
                    error:      err
                })
            })
        }
        app.use( ( err, req, res, next) => {
            res.status( err.status || 500 )
            res.render( 'error', {
                message:    err.message,
                error:      {}
            })
        })*/
};