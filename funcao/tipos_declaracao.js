console.log(soma(3, 4))
// console.log(sub(5, 5)) // não executa, é chamada depois da declaração apenas

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}