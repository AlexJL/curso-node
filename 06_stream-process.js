'use strict'

var stdin =  process.stdin,
    stdout = process.stdout,
    person = {
        name : null,
        age : 0
    }

function saveAge(age){
    person.age = age
    if( person.age >= 18) stdout.write( `${person.name} es mayor de edad, tiene ${person.age} años` )
    else stdout.write(` ${person.name} + es menor de edad, tiene ${person.age}`)
    process.exit()
}

function saveName(name){
    person.name =  name
    var question = `Hola ${person.name}, ¿ Cuantos años tienes ?`
    quiz(question, saveAge);
}

function quiz(question, callback){
    stdin.resume()
    stdout.write( question + ': ')

    stdin.once('data', (res) => {
        callback( res.toString().trim() )
    })
}

stdin.setEncoding('utf8')
quiz('¿Como te llamas?',saveName)