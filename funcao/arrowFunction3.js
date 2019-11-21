let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)  // true      // no Node o objeto global é chamado de global. No browser é window
comparaComThis(this)    // false      

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)  // false    // neste caso o this se referencia ao obj, por isso não é global
comparaComThis(obj)     // true

let comparaComThisArrow = param => console.log(this === param)  // neste caso, a arrow function foi criada
                                                                // dentro do context do Node, logo o this
                                                                // representa o module.exports
comparaComThisArrow(global)             // false
comparaComThisArrow(module.exports)     // true
comparaComThisArrow(this)               // true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)              // false  // o this na arrow function sempre se referncia à função arrow
comparaComThisArrow(module.exports)   // true