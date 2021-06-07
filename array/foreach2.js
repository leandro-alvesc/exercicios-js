Array.prototype.forEach2 = function(func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this)
  }
}

const aprovados = ['Joana', 'Kamila', 'João', 'Danilo']

aprovados.forEach2(function(nome, indice) {
  console.log(`${indice + 1}) ${nome}`)
})
