'use strict'
const http = require('http').createServer(webServer),
    fs =  require('fs'),
    index =  fs.createReadStream('assets/index.html')

const hostname = 'localhost'
const port = 3000

function webServer(req, res)  {
    res.writeHead(200, {'Content-Type': 'text/html'})
    index.pipe(res)
    //res.end('<h1>Hello World</h1>')
}

http
    .listen( port, hostname, () => {
    console.log(`Server runing at http://${hostname}:${port}/`)
})