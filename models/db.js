/*
var settings = require('../config'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;

module.exports = new Db(settings.db, new Server(settings.host, settings.port), {safe: true});*/

module.exports = require('mongoose').connect('mongodb://localhost/watcher');

