export const toMoney = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }).format(value).toString();
}


export const toPlural = (value: number, singular: string, plural: string) => {
    return value === 1 ? singular : plural
}