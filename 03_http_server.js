'use strict'
const http = require('http')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
    //res.statusCode = 200
    //res.setHeader('Content-Type', 'text/plain')
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>Hello World</h1>')
})

server.listen( port, hostname, () => {
    console.log(`Server runing at http://${hostname}:${port}/`)
})