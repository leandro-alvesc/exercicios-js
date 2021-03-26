const nome = 'Joaquina'
const concatenar = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenar, template)

// Expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ow... ${up('atenção')}!`)