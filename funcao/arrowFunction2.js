function Pessoa() {
    this.idade = 0

    setInterval(() => {         // na Arrow Funtion o this  não varia, logo o objeto é sempre Pessoa
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa