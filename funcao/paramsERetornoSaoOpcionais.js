function area(largura, altura) {
    const area = largura * altura
    if (area > 20) { // não é interessante
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(2, 3, 12, 44, 55)
console.log(area(5, 5))