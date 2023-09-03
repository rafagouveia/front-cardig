import { create } from "zustand";

export type ProductProps = {
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  id?: string;
};

type ActionsProductProps = {
  addProducts: (products: ProductProps) => void;
};

type StoreProductProps = {
  products: ProductProps[];
  actions: ActionsProductProps;
};
const initialProducts: ProductProps[] = [
  {
    title: "Hamburguer",
    price: 10,
    image: "https://i.imgur.com/vRwd1JO.png",
    description: "Sem",
    category: "1",
  },
  {
    title: "Hamburguer Artesanal",
    price: 30,
    image: "https://i.imgur.com/VrzHkss.png",
    description: "Sem",
    category: "1",
  },
  {
    title: "Pizza Pequena",
    price: 18,
    image: "https://i.imgur.com/L1Iu6TJ.png",
    description: "Sem",
    category: "2",
  },
  {
    title: "Pizza Grande",
    price: 35,
    image: "https://i.imgur.com/2k162Gy.png",
    description: "Sem",
    category: "2",
  },
  {
    title: "Pastel Salgado",
    price: 7.5,
    image: "https://i.imgur.com/CF8YAu7.jpg",
    description: "Sem",
    category: "3",
  },
  {
    title: "Pastel Doce",
    price: 10,
    image: "https://i.imgur.com/CF8YAu7.jpg",
    description: "Sem",
    category: "3",
  },
];
export const useProduct = create<StoreProductProps>((set) => ({
  products: initialProducts,
  actions: {
    addProducts: (newProduct) =>
      set(({ products }) => ({
        products: [...products, newProduct],
      })),
  },
}));
