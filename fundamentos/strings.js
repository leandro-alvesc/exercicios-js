const escola = "Escola"

console.log(escola.charAt(3))
console.log(escola.charAt(7))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('s'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Olá '.concat(escola).concat('!'))
console.log('Olá ' + escola + '!')
console.log(escola.replace(/\w/g, 'e'))
console.log(escola.replace('E', 'e'))

console.log('Maria,Ariel,João'.split(','))