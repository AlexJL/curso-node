'use strict'

const EventEmitter = require('events')

class Clock extends EventEmitter{

    thetime(){
        let date =  new Date(),
            hrs = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            msg = `${hrs}:${min}:${sec}`
        console.log(msg)
    }
}

var clock =  new Clock()

clock.on('titac',() => {
    clock.thetime();
})

setInterval(() => {
    clock.emit('titac');
},1000)
