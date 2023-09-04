import { CartProps } from "../stores/Cart";

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

export const toQuantity = (cart: CartProps[]) => {
   return cart.reduce((acc, item) => acc + item.quantity, 0);
}

export const toAmount = (cart: CartProps[]) => {
    return cart.reduce((acc, item) => acc + item.amount, 0);
}