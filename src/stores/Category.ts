import { create } from "zustand";



export type CategoryListStoreProps = {
    id: string;
    name: string;
    description: string;
    image: string;
    location?: string;
    is_open: boolean;
    delivery: boolean;
    freight: number;
    local: boolean;
}
export type CategoryProps = {
    id?: string;
    name: string;
    description: string;
    store: CategoryListStoreProps[];
};

type ActionsCategoryProps = {
    addCategory: (category: CategoryProps) => void;
};
type CategoryStoreProps = {
    categories: CategoryProps[];
    actions: ActionsCategoryProps;
};

const initialCategories: CategoryProps[] = [

];

export const useCategory = create<CategoryStoreProps>((set) => ({
    categories: initialCategories,
    actions: {
        addCategory: (newCategory) =>
            set(({ categories }) => ({ categories })),
    },
}));
