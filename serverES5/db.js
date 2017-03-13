'use strict';

var mongoose = require('mongoose');
var stuctModels = require('./models');

module.exports = function (uri) {
    mongoose.connect(uri);
    return stuctModels(mongoose);
};