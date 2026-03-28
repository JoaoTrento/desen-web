console.log('Hello World!')

const aluno = {
    nome: 'João Pedro',
    idade: 19,
    time: {
        nome: 'Grêmio',
        ano_criacao: 1903
    }
}

function calcular(func1, func2) {
    return func1 + func2
}

function sub(val1, val2) {
    return val1 - val2
}

const lista = ['gremio', 'nacional', 'vasco']
console.log(lista)

console.log(calcular(sub(10, 5), sub(7, 3)))

if ('2' == 2) {
    console.log('Sim')
}

if ('2' === 2) {
    console.log('Sim')
}

for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log(element)
}

const nome_variavel = () => console.log('João');
nome_variavel()