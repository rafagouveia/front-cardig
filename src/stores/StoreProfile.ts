import { create } from "zustand";


export type ProductCategoryProps = {
    id?: string;
    name: string;
    description: string;
    paused: boolean;
    active: boolean;
    maximum: number;
    products: [];
    minimum: number;
    created_at: string;
    updated_at: string;
}

export type StoreProfileProps = {
    id?: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    freight: number;
    is_open: boolean;
    minimumOrder: number | null;
    waitTime: string;
    location: string;
    product_categories: ProductCategoryProps[];
    delivery: boolean;
    rating: number;
    on_the_table: boolean;
    pickup: boolean;
    local: boolean;
}
type ActionsProfileProps = {
    setStore: (store: StoreProfileProps) => void;
    setLoading: (loading: boolean) => void;
}
type StoreStoreProfileProps = {
    storeProfile: StoreProfileProps;
    loading: boolean;
    actions: ActionsProfileProps;
}
const initialStoreProfile: StoreProfileProps = {
    id: "1",
    name: "Restaurante 1",
    slug: "restaurante-1",
    description: "O melhor temaki da cidade",
    image: "https://i.imgur.com/bqsz2Ut.png",
    freight: 15,
    is_open: true,
    minimumOrder: 15,
    waitTime: "15min - 46min",
    location: "Av. dos Bandeirantes 115",
    product_categories: [],
    delivery: true,
    rating: 0,
    local: false,
    on_the_table: false,
    pickup: false
}
export const useStoreProfile = create<StoreStoreProfileProps>((set) => ({
    storeProfile: initialStoreProfile,
    loading: true,
    actions: {
        setStore: (storeProfile) => set({ storeProfile }),
        setLoading: (loading) => set({ loading }),
    }
}))