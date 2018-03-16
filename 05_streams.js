'use strict'

var fs = require('fs'),
    readStream = fs.createReadStream('assets/texto.txt'),
    writeStream = fs.createWriteStream('assets/text_copia.txt')

readStream.pipe( writeStream )

readStream.on('data', (chunk) => {
    console.log(`He leído ${chunk.length} bytes`)
})

readStream.on('end', () => {
    console.log(`Terminé de leer el archivo`)
})

