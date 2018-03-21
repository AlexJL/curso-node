'use strict'

class Clock{
    constructor(){
        setInterval( () => {
            this.theTime()
        }, 1000)
    }

    theTime(){
        var date  =  new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        ampm = ( hrs < 12 ) ? 'am' : 'pm',
        hrs1 = (hrs > 12) ? hrs - 12 : hrs 
        //msg = addZero(hrs1) + ":" +  addZero(min) + ":" + addZero(sec) + ampm;
        var msg = `${addZero(hrs1)}:${addZero(min)}:${addZero(sec)}${ampm}`
        function addZero(num){
            return (num < 10) ? "0"+num : num
        }
        console.log(msg);
    }
}

module.exports = Clock