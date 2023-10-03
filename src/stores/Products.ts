import { create } from "zustand";
import { DishGarnish } from "../utils/types";

export type ProductProps = {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  id?: string;
  dish_garnishs: DishGarnish[];
};

type ActionsProductProps = {
  addProducts: (products: ProductProps) => void;
};

type StoreProductProps = {
  products: ProductProps[];
  actions: ActionsProductProps;
};
const initialProducts: ProductProps[] = [];

export const useProduct = create<StoreProductProps>((set) => ({
  products: initialProducts,
  actions: {
    addProducts: (newProduct) =>
      set(({ products }) => ({
        products: [...products, newProduct],
      })),
  },
}));
