'use strict'

var buf =  Buffer.alloc(100),
    buf2 = Buffer.alloc(26),
    str = '\u00bd + \u00bc = \u00be'

buf.write('abcd', 0, 4, 'ascii')
console.log(buf)

console.log(
    buf.toString(),
    str,
    Buffer.byteLength(str, 'utf-8')
)

for(let i = 0; i < buf2.length; i++){
    //97 codigo ascii de la a
    buf2[i]  = i + 97;
}

console.log(buf2.toString('ascii'));