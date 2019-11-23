// com promise...
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

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})

Promise.all( [getTurma('A'), getTurma('B'), getTurma('C')] )
    .then(x => console.log('Array com Arrays:', x))  // aqui retorna um array com arrays

Promise.all( [getTurma('A'), getTurma('B'), getTurma('C')] )
    .then(turmas => [].concat(...turmas))
    .then(x => console.log('Array Único;', x))  // aqui retorna um único array
    .catch(e => console.log(e.message))

Promise.all( [getTurma('A'), getTurma('B'), getTurma('C')] )
    .then(turmas => [].concat(...turmas))       // concatenou todas em um único array
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log('Resultado Final:', nomes))
    .catch(e => console.log(e.message))

// aqui retorna erro, pois não existe a turma D
getTurma('D').catch(e => console.log('Erro Turma D:', e.message))    