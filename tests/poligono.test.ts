import { Composicao, Retangulo, Triangulo } from "../src/poligono"

describe('Calcular Area', () => {
    test('A area do quadrado 10 x 10 deve ser 100', () => {
        const retangulo = new Retangulo(10,10)
        expect(retangulo.calcularArea()).toBe(100)

    })

    test('A area do triangulo de 10 x 10 deve ser 50', () => {
        const triangulo = new Triangulo(10,10)
        expect(triangulo.calcularArea()).toBe(50)
    })

    test('A estrela de quatro pontas deve de 10 x 10 x 10 deve ser 300', () => {
        const triangulo = new Triangulo(10,10)
        const retangulo = new Retangulo(10,10)
        
        const estrela = new Composicao([
            retangulo,
            triangulo,
            triangulo,
            triangulo, 
            triangulo
        ])

        const estrelaChifruda = new Composicao([estrela, triangulo])

        expect(estrela.calcularArea()).toBe(300)
    })


})