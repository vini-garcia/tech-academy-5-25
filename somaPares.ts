
/**
 * Todo:
 * Refatore a função calcular:
 */
function somarNumerosPares(numeros: number[]): number {
    const numerosPares = filtrarNumerosPares(numeros)
    return somarNumeros(numerosPares)
}

function validarParidade(numero: number): boolean {
    return numero % 2 === 0
}

function filtrarNumerosPares(numeros: number[]): number[] {
    return numeros.filter(numero => validarParidade(numero))
}

function somarNumeros(numeros: number[]): number {
    return numeros.reduce((soma,numero) => soma + numero, 0)
}

const numeros = [1, 2, 3, 4, 5, 6]
console.log(somarNumerosPares(numeros))