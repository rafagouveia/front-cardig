import { create } from "zustand";
import { ProductProps } from "./Products";
import { persist, devtools } from "zustand/middleware";

export type CartProps = ProductProps & {
    quantity: number;
    amount: number;
};

type ActionsCartProps = {
    addToCart: (product: ProductProps) => void;
    deleteItem: (index: number) => void;
    cleanCart: () => void;
};


type StoreCart = {
    cart: CartProps[];
    actions: ActionsCartProps;
};

const removeItem = (cart: CartProps[], index: number) => {
    return cart.map((item, i) => {
        if (i === index && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1, amount: item.amount - item.price }
        }
        return item
    }).filter((item) => item.quantity > 0)
}
export const useCart = create<StoreCart>()(
    devtools(
        persist(
            (set) => ({
                cart: [],
                actions: {
                    addToCart: (product) =>
                        set((state) => {
                            // Check if the product already exists in the cart
                            const existingProduct = state.cart.find(
                                (item) => item.id === product.id
                            );

                            if (existingProduct) {
                                // If the product already exists, increment the quantity
                                const updatedCart = state.cart.map((item) =>
                                    item.id === product.id
                                        ? { ...item, quantity: item.quantity + 1, amount: item.amount + product.price }
                                        : item
                                );
                                return { cart: updatedCart };
                            } else {
                                // If the product does not exist, add it to the cart with quantity 1
                                return { cart: [...state.cart, { ...product, quantity: 1, amount: product.price }] };
                            }
                        }),
                    deleteItem: (indexDelete) =>
                        set((state) => ({
                            cart: removeItem(state.cart, indexDelete),
                        })),
                    cleanCart: () => set({ cart: [] }),
                },
            }),
            {
                name: "cart",
                partialize: (state) => ({ cart: state.cart }),

            }
        )
    )
)