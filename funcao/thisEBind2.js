function Pessoa() {
    this.idade = 0

    const self = this // constante para a o this não variar de acordo com a chamada

    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)  // ao usar o bind resolveria esse problema sem precisar do self
}

new Pessoa 