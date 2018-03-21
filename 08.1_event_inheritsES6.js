'use strict'

class Clock{

    constructor(){
        setInterval( () => {
            this.thetime()
        }, 1000)
    }

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
clock.thetime()



