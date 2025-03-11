interface Peca {
    descricao: string,
    preco: number
}

interface ItemOrdemServico {
    peca: Peca
    quantidade: number
}


function calcularTotalLiquidoOrdemServico (itens: ItemOrdemServico[], valorMaoDeObra: number, freteBase: number): number {
    const percentualDesconto: number = 0.5
    const totalBruto = calcularTotalBrutoOrdemServico(itens)
    const maoDeObra = calcularMaoDeObra(valorMaoDeObra)
    const frete = calcularFrete(freteBase)
    const valorComDesconto = calcularDesconto(totalBruto, percentualDesconto)

    return valorComDesconto + maoDeObra + frete
}

function calcularTotalBrutoOrdemServico(itens: ItemOrdemServico[]): number {
    return itens.reduce(
        (soma, item) => soma + (item.peca.preco * item.quantidade), 0
    )
}

function calcularMaoDeObra(valorMaoDeObra: number): number {
    return (valorMaoDeObra > 1000) ? 1000 : valorMaoDeObra
}


function calcularFrete(freteBase: number): number {
    return verificarFreteTemDesconto(freteBase) ? freteBase - (freteBase * 0.2): freteBase
}

function verificarFreteTemDesconto(frete: number): boolean {
    return frete > 500
}

function calcularDesconto(totalBruto: number, percentualDesconto: number): number {
    return totalBruto * percentualDesconto
}