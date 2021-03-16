// Função em Js é First-Class Object(Citizens)
// Higher-order function

// forma literal
function fun1() { }

// armazenar em variável
const fun2 = function () { }

// em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// em atributo de objeto
const obj = {}
obj.falar = function () {return 'Oi'}
console.log(obj.falar())

// passar função como param 
function run(fun) {
    fun()
}

run(function () { console.log('Executando') })

// pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)