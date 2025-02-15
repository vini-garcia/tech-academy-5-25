interface Peca {
    descricao: string,
    preco: number
}

interface ItemOrdemServico {
    peca: Peca
    quantidade: number
}

let desconto = 0.5 //percentual

function calcular (itens: Array<ItemOrdemServico>, valorMaoDeObra: number, frete: number) {
    
    let x = 0

    itens.forEach(item => {
        x += item.peca.preco * item.quantidade
    })

    if (valorMaoDeObra > 1000) {
        valorMaoDeObra = 1000
    }
    x += valorMaoDeObra

    if (x > 500) {
        frete = frete - (frete * 0.2)
    }

    x += frete

    x = x * desconto

    return x
}