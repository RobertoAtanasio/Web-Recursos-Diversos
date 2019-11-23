// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log('1.', a)
// console.log('2', b)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log('Destructuring:', l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }    // a variável nome foi renomeada para i
console.log(i, nome)

const [...letras] = "Roberto"
console.log(letras)