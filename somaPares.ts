
/**
 * Todo:
 * Refatore a função calcular:
 */
function calcular(arr: number[]): number {
    let x = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            x += arr[i]
        }
    }
    return x
}

const numbers = [1, 2, 3, 4, 5, 6]
console.log(calcular(numbers))