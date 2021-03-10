const notas = [6.7, 7.2, 4.1, 2.1, 8.9]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Barbosa',
    idade: 25,
    peso: 55
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}