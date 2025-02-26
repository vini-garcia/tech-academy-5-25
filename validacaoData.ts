/**
 * Todo: Algoritmo para validar datas:
 * 
 * Implemente um algoritmo que valide se uma data é válida. Considere as seguintes regras:
 */


/*
 * Uma data válida consiste na validação do dia, mês e ano.
 */
function validarData(dia: number, mes: number, ano:number): boolean {
    const diaValido = validarDia(dia,mes,ano)
    const mesValido = validarMes(mes)
    const anoValido = validarAno(ano)
    return diaValido && mesValido && anoValido
}


/*
* O ano é considerado válido quando estiver no intervalo entre 1 e 9999.
*/
function validarAno(ano: number): boolean {
    return ano >= 1 && ano <= 9999
}


/*
* O mês é considerado válido quando estiver no intervalo entre 1 e 12.
*/
function validarMes(mes: number): boolean {
    return mes >= 1 && mes <= 12
}


/*
* O dia é considerado válido quando estiver no intervalo 
* entre 1 e o número que representa a quantidade de dias do mês.
*/
function validarDia(dia: number, mes: number, ano:number): boolean {
    const maximoDiasMes = obterQuantidadeDias(mes,ano)
    return dia >= 1 && dia <= maximoDiasMes
}


/*
* A quantidade de dias do mês varia conforme o mês, sendo que alguns tem 30 e outros têm 31.
*/
function obterQuantidadeDias(mes: number, ano: number): number {
    const maximoDiasFevereiro = obterDiasFevereiro(ano)
    const quantidadeDiasMes= {
        1: 31,
        2: maximoDiasFevereiro,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    return quantidadeDiasMes[mes]
}


/*
* Fevereiro é uma exceção, pois tem 29 dias em anos bissestos 
* e 28 dias nos demais anos.
*/
function obterDiasFevereiro(ano: number): number {
    const anoBissesto = validarAnoBissesto(ano)
    return anoBissesto ? 29 : 28
}


/*
* O ano bissesto pode ser identificado quando 
* for divisível por 4 e não for divisível por 100, 
* ou então quando for divisível por 400.
*/
function validarAnoBissesto(ano: number): boolean {
    const divisivelPor4 = ano % 4 === 0
    const divisivelPor100 = ano % 100 === 0
    const divisivelPor400 = ano % 400 === 0
    return (divisivelPor4 && !divisivelPor100) || divisivelPor400
}
