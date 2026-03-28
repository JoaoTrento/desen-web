const valorConta = 100
const percentualGorjeta = 15

const valorGorjeta = valorConta * (percentualGorjeta / 100)

const valorFinalConta = valorConta + valorGorjeta

console.log(`Total da Conta: R$${valorConta.toFixed(2)} \n` +
            `Percentual da Gorjeta: ${percentualGorjeta}% \n` +
            `Valor da Gorjeta: R$${valorGorjeta.toFixed(2)} \n` +
            `Valor Final: R$${valorFinalConta.toFixed(2)}`)