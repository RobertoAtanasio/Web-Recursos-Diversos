function Pessoa() {
    this.idade = 0

    const self = this       // se refere ao objeto Pessoa
    setInterval(function() {
        self.idade++
        console.log('1', self.idade)
    }, 1000)
}

new Pessoa

function Pessoa2() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log('2', this.idade)
    }.bind(this), 1000)     // o bind faz com que a setInterval associe o this para a função Pessoa2
}

new Pessoa2