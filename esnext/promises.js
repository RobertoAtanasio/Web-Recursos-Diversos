function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (segundos == 3) {
                resolve(frase)              // apresenta o resultado quando a promessa é resolvida
                                            // o resolve só recebe um parâmetro. Se desejar mais de uma,
                                            // cria-se um objeto
            } else {
                reject("Rejeitou!")         // rejeita a promise
            }
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))    // o then anterior é entrada desse then
    .catch(e => console.log('Erro:', e))

falarDepoisDe(2, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log('Erro:', e))