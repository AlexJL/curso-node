'use_strict'

var Eventemitter =  require('events').EventEmitter,
    util = require('util').inherits

var Clock = function (){
    var self =  this
    console.log(self)
    setInterval(() => {
        self.emit('titac')
    }, 1000)
}

util(Clock, Eventemitter)

Clock.prototype.thetime = function(){
    var date  =  new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = hrs + ":" +  min + ":" + sec;

    console.log(msg);
}

var cucu = new Clock()

cucu.on('titac', function(){
    cucu.thetime();
})