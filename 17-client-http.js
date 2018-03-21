'use strict'

var http = require('http'),
    option = {
        host : 'www.sedalib.com.pe',
        port : 80,
        path : '/'
    }

http
    .get(option, (res) => {
        console.log(`El sitio ${option.host} ha respondido. Código de estado: ${res.statusCode}`)
    })
    .on('error', function(err){
        console.log(`El sitio ${option.host} no respondió. Código de estado: ${err.code}. Error: ${err.message}`)
    })