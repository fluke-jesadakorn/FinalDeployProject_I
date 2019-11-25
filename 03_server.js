var express = require('express')
var nbserver = require('./main/nbserver')
var store = require('./main/store')
var database = require('./main/mongodb')
var line = require('./main/lineAPI')
var app = express();

//realtimegraph.server()
nbserver.listen()
//setInterval(()=>{console.log('temp : ' + store.temp)},5000)
database.database()
line.line()