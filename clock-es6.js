'use_strict'

var Clock =(function(){
    var Eventemitter =  require('events').EventEmitter,
    util = require('util').inherits

    var Clock = function (){
        //var self =  this
        setInterval(() => {
            this.emit('titac')
        }, 1000)
    }

    util(Clock, Eventemitter)

    Clock.prototype.thetime = function(){
        var date  =  new Date(),
            hrs = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            ampm = ( hrs < 12 ) ? 'am' : 'pm',
            hrs1 = (hrs > 12) ? hrs - 12 : hrs 
            //msg = addZero(hrs1) + ":" +  addZero(min) + ":" + addZero(sec) + ampm;
            msg = `${addZero(hrs1)}:${addZero(min)}:${addZero(sec)}${ampm}`
            function addZero(num){
                return (num < 10) ? "0"+num : num
            }

        console.log(msg);
    }

    return Clock
})()


module.exports = Clock;