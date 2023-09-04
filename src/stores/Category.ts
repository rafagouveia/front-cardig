import { create } from "zustand";

export type CategoryProps = {
    id?: string;
    name: string;
    description: string;
    visible?: boolean;
};

type ActionsCategoryProps = {
    addCategory: (category: CategoryProps) => void;
};
type CategoryStoreProps = {
    categories: CategoryProps[];
    actions: ActionsCategoryProps;
};

const initialCategories: CategoryProps[] = [
    {
        id: "1",
        name: "Hamburguers",
        description: "Sem",
        visible: true,
    },
    {
        id: "2",
        name: "Pizza",
        description: "Sem",
        visible: true,
    },
    {
        id: "3",
        name: "Pastel",
        description: "Sem",
        visible: true,
    },
];

export const useCategory = create<CategoryStoreProps>((set) => ({
    categories: initialCategories,
    actions: {
        addCategory: (newCategory) =>
            set(({ categories }) => ({ categories: [...categories, newCategory] })),
    },
}));
