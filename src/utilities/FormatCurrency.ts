

export const Format = (valor: number) => {

    return new Intl.NumberFormat('en-US', {
        
    }).format(valor);

}

export const FormatCurrency = (valor: number) => {
    return new Intl.NumberFormat( 'en-US' ,{
        style: 'currency',
        currency: 'USD'

    }).format(valor);
}


export const FormatPercent = (valor: number) => {
    return `${valor.toFixed(2)}%`
}


export const FormatCap = (valor: number) => {
    if(valor >= 1000000000000){
        return `${(valor / 1000000000000).toFixed(2)}T`
        
    }

}