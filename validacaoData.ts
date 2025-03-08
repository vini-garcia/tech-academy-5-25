/**
 * Todo: Algoritmo para validar datas:
 * 
 * Implemente um algoritmo que valide se uma data é válida. Considere as seguintes regras:
 */


export class Data {

    constructor(
        private dia: number, 
        private mes: number, 
        private ano: number
    ){}

    
    /*
    * Uma data válida consiste na validação do dia, mês e ano.
    */
    validarData(): boolean {
        const diaValido = this.validarDia()
        const mesValido = this.validarMes()
        const anoValido = this.validarAno()

        return diaValido && mesValido && anoValido
    }


    /*
    * O ano é considerado válido quando 
    * estiver no intervalo entre 1 e 9999.
    */
    validarAno(): boolean {
        return this.ano >= 1 && this.ano <= 9999
    }


    /*
    * O mês é considerado válido quando estiver no intervalo entre 1 e 12.
    */
    validarMes(): boolean {
        return this.mes >= 1 && this.mes <= 12
    }


    /*
    * O dia é considerado válido quando estiver no intervalo 
    * entre 1 e o número que representa a quantidade de dias do mês.
    */
    validarDia(): boolean {
        const quantidadeDiasMes = this.obterQuantidadeDiasMes()

        return this.dia >= 1 && this.dia <= quantidadeDiasMes
    }


    /*
    * A quantidade de dias do mês varia conforme o mês, 
    * sendo que alguns tem 30 e outros têm 31.
    * Fevereiro é uma exceção, pois tem 29 dias em anos bissestos 
    * e 28 dias nos demais anos.
    */
    obterQuantidadeDiasMes(): number {
        const anoBissesto = this.validarAnoBissesto()
        const quantidadeDiasMes = {
            1: 31,
            2: anoBissesto ? 29 : 28,
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

        return quantidadeDiasMes[this.mes]
    }

    
    /*
    * O ano bissesto pode ser identificado quando 
    * for divisível por 4 e não for divisível por 100, 
    * ou então quando for divisível por 400.
    */
    validarAnoBissesto(): boolean {
        const divisivelPor4 = this.ano % 4 === 0
        const divisivelPor100 = this.ano % 100 === 0
        const divisivelPor400 = this.ano % 400 === 0

        return (divisivelPor4 && !divisivelPor100) || divisivelPor400
    }
}

