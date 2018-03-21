'use strict'

var http = require('http').createServer(webServer),
    form = require('fs').readFileSync('./assets/form.html'),
    querystring = require('querystring'),
    util = require('util'),
    dataString = ''

function webServer(req, res){
    if(req.method == 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(form)
    }

    if(req.method == 'POST'){
        req
            .on('data', (data) => {
                dataString += data
            })
            .on('end', () => {
                var templateString = `Los datos que enviaste por POST como string son: ${dataString}`
                console.log(templateString)
                res.end(templateString)
                console.log(querystring.parse(dataString))
            })
    }
}

http.listen(3000, 'localhost', () => {
    console.log(`Servidor corriendo en http://localhost:3000/`);
})