'use strict'

var persona = require('./main_data').Persona,
    Clock = require('./clock-es5'),
    cucu = new Clock()

//console.log(persona)



cucu.on('titac', function(){
    cucu.thetime();
})