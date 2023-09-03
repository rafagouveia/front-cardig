import { create } from "zustand";
import { ProductProps } from "./Products";
import { persist, devtools } from "zustand/middleware";

export type CartProps = ProductProps;

type ActionsCartProps = {
    addToCart: (product: CartProps) => void;
    deleteItem: (product: CartProps) => void;
    cleanCart: () => void;
};


type StoreCart = {
    cart: CartProps[];
    actions: ActionsCartProps;
};

export const useCart = create<StoreCart>()(
    devtools(
        persist(
            (set) => ({
                cart: [],
                actions: {
                    addToCart: (product) =>
                        set((state) => ({ cart: [...state.cart, product] })),
                    deleteItem: (product) =>
                        set((state) => ({
                            cart: state.cart.filter((item) => item.id !== product.id),
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