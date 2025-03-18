
export interface Poligono {
    calcularArea(): number
}

export class Triangulo implements Poligono {
    constructor (
        private base: number, 
        private altura: number
    ) {}

    calcularArea(){
        return (this.base * this.altura) / 2
    }
}

export class Retangulo implements Poligono {
    constructor(
        private altura: number,
        private largura: number
    ) {}

    calcularArea(){
        return this.largura * this.altura
    }
}

export class Composicao implements Poligono {
    constructor(
        private poligonos: Poligono[]
    ) {}

    calcularArea(): number {
        const area = this.poligonos.reduce(
            (soma, poligono) => soma + poligono.calcularArea(), 0
        )
        return area
    }
}