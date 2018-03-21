'use strict'

var persona = require('./main_data').Persona,
    //Clock = require('./clock-es5'),
    Clock = require('./clock-es6'),
    cucu = new Clock()

//console.log(persona)



cucu.on('titac', function(){
    cucu.thetime();
})