const prod1 = {}
prod1.nome = 'Lala'
prod1.preco = 301.55
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'TV',
    preco: 568.41,
    obj: {
        lala: 1,
        obj: {
            lala: 1
        }
    }
}

console.log(prod2)

'{ "nome": "Camisa Polo", "preco": 79.90}'  // JSON é texto