'use strict'
const http = require('http').createServer(webServer),
    fs =  require('fs')

const hostname = 'localhost'
const port = 3000

function webServer(req, res)  {
    function readFile(err, data){
        if(err) throw err
        res.end(data)
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('assets/index.html', readFile)
    //index.pipe(res)
    //res.end('<h1>Hello World</h1>')
}

http
    .listen( port, hostname, () => {
    console.log(`Server runing at http://${hostname}:${port}/`)
})