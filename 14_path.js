'use strict'


var http = require('http').createServer(webServer),
    path = require('path'),
    urls = [
        { 
            route: '',
            output: '<h2>Home</h2>'
        },
        { 
            route : 'acerca',
            output : '<h2>Acerca</h2>'
        },
        {
            route : 'contacto',
            output : '<h2>Contato</h2>'
        }
    ]

function webServer(req, res){
    var message = '<h1>Hola NodeJs</h1>',
        pathUrl = path.basename(req.url)
    console.log(pathUrl)
    //res.end(message)

    urls.forEach((pos) => {
        if(pos.route == pathUrl) {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(message + pos.output)
        }
    })

    if(!res.finished){
        res.writeHead(404, {'Content-Type' : 'text/html'})
        res.end('<h1>Error 404: Not Found</h1>')
    }
}

http.listen(3000, 'localhost', () => {
    console.log('Servidor corriendo en http://localhost:3000/')
})
