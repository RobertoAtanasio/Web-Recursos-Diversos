const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)     // converte para jSON

const apenasPreco = produto => produto.preco

const comPrecoDobrado = produto => {
    return {preco: produto.preco, doublo: produto.preco * 2 }
}

const resultado1 = carrinho.map(paraObjeto)
console.log('1', resultado1)

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log('2', resultado2)

const resultado3 = carrinho.map(paraObjeto).map(comPrecoDobrado)
console.log('3', resultado3)