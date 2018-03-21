'use strict'

var http = require('http'),
    option = {
        host : 'www.sedalib.com.pe',
        port : 80,
        path : '/'
    },
    htmlCode = ''

function httClient(res){
    console.log(`El sitio ${option.host} ha respondido. Código de estado: ${res.statusCode}`)
    res.on('data', (data) => {
        htmlCode += data
        console.log(
            data,
            data.toString()
        )
    })
}


function httClientError(err){
    console.log(`El sitio ${option.host} no respondió. Código de estado: ${err.code}. Error: ${err.message}`)
}

function webServer(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(htmlCode)
}

http
    .get(option, httClient)
    .on('error', httClientError)

http
    .createServer(webServer)
    .listen(3000, 'localhost', () => {
        console.log(`Servidor corriendo en http://localhost:3000/` )
    })