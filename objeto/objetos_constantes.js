// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Carlos'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' } // erro, constante não pode mudar onde está apontando

Object.freeze(pessoa) // não é mais possível mudar o objeto

pessoa.nome = 'Joana' // será ignorado
pessoa.end = 'Rua 1' // também será ignorado
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Maria' })
pessoaConstante.nome = 'Joao'
console.log(pessoaConstante)