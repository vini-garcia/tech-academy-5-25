import { Data } from "../src/Data"


xdescribe('Ano Bissexto', () => {
    test('2024 deve ser um ano bissexto', () => {
        const anoBissexto = new Data(1,1,2024)
        expect(anoBissexto.validarAnoBissesto()).toBeTruthy()
    })
    
    test('2025 não deve ser bissexto', () => {
        const anoNaoBissexto = new Data(1,1,2026)
        expect(anoNaoBissexto.validarAnoBissesto()).toBeFalsy()
    })
})


xdescribe('Quantidade de Dias do Mês', () => {
    /*
    * A quantidade de dias do mês varia conforme o mês, 
    * sendo que alguns tem 30 e outros têm 31.
    * Fevereiro é uma exceção, pois tem 29 dias em anos bissestos 
    * e 28 dias nos demais anos.
    */
   test('Janeiro deve ter 31 dias', () => {
        const janeiro = new Data(1,1,2025)
        expect(janeiro.obterQuantidadeDiasMes()).toBe(31)
   })
   test('Agosto deve ter 31 dias', () => {
        const agosto = new Data(1,8,2025)
        expect(agosto.obterQuantidadeDiasMes()).toBe(31)
   })
   test('Junho deve ter 30 dias', () => {
        const junho = new Data(30,6,2025)
        expect(junho.obterQuantidadeDiasMes()).toBe(30)
   })
   test('Fevereiro deve ter 29 dias em anos bissextos', () => {
        const fevereiroBissexto = new Data(1,2,2024)
        expect(fevereiroBissexto.obterQuantidadeDiasMes()).toBe(29)
   })
   test('Fevereiro deve ter 28 dias em anos não bissextos', () => {
        const fevereiroNaoBissexto = new Data(1,2,2025)
        expect(fevereiroNaoBissexto.obterQuantidadeDiasMes()).toBe(28)
   })
})