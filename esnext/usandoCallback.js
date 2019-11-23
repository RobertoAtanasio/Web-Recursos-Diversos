// sem promise...
// Exemplo de retorno da API:
// [
// {"id":1,"nome":"Kellia","imagem":"https://robohash.org/sedsolutaeligendi.png?size=50x50&set=set1"},
// {"id":2,"nome":"Hi","imagem":"https://robohash.org/aperiammollitialibero.png?size=50x50&set=set1"},
// {"id":3,"nome":"Inge","imagem":"https://robohash.org/itaqueintempora.bmp?size=50x50&set=set1"},
// {"id":4,"nome":"Myrle","imagem":"https://robohash.org/nisiaccusantiumqui.png?size=50x50&set=set1"},
// {"id":5,"nome":"Doreen","imagem":"https://robohash.org/magnamasperioresin.bmp?size=50x50&set=set1"},
// {"id":6,"nome":"Pennie","imagem":"https://robohash.org/temporarationedolorum.jpg?size=50x50&set=set1"},
// {"id":7,"nome":"Faye","imagem":"https://robohash.org/doloribusrerumdeleniti.bmp?size=50x50&set=set1"},
// {"id":8,"nome":"Leena","imagem":"https://robohash.org/voluptasexpeditadoloribus.jpg?size=50x50&set=set1"},
// {"id":9,"nome":"Taylor","imagem":"https://robohash.org/possimusprovidentid.bmp?size=50x50&set=set1"},
// {"id":10,"nome":"Juieta","imagem":"https://robohash.org/sitaliquidtotam.bmp?size=50x50&set=set1"}
// ]

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        // aqui está recebendo os dados a medida que são enviados
        res.on('data', dados => {
            resultado += dados
        })

        // aqui terminou de receber os dados
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
        // console.log(nomes)
    })
    // console.log(nomes)
})