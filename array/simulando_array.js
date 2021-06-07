const quaseArray = { 0: 'Carlos', 1:'Maria', 2: 'Ana' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
  value: function() { return Object.values(this) },
  enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Carlos', 'Maria', 'Ana']
console.log(quaseArray.toString(), meuArray)