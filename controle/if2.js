function teste1(num) {
    if(num > 7) // aceita apenas uma única sentença sem chaves, mesmo estando identado
        console.log(num)
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com o ; não usar com estruturas de controle
        console.log(num)
    }
}

teste2(5)
teste2(2)