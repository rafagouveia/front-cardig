import { create } from "zustand";


export type StoreProfileProps = {
    id?: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    frete: number;
    opened: boolean;
    minimal: number | null;
    waitTime: string;
    location: string;
    delivery: boolean;
    rating: number;
    local: boolean;
}
type ActionsProfileProps = {
    setStore: (store: StoreProfileProps) => void;
}
type StoreStoreProfileProps = {
    storeProfile: StoreProfileProps;
    actions: ActionsProfileProps;
}
const initialStoreProfile: StoreProfileProps = {
    id: "1",
    name: "Restaurante 1",
    slug: "restaurante-1",
    description: "O melhor temaki da cidade",
    image: "https://i.imgur.com/bqsz2Ut.png",
    frete: 15,
    opened: true,
    minimal: 15,
    waitTime: "15min - 46min",
    location: "Av. dos Bandeirantes 115",
    delivery: true,
    rating: 0,
    local: false,
}
export const useStoreProfile = create<StoreStoreProfileProps>((set) => ({
    storeProfile: initialStoreProfile,
    actions: {
        setStore: (storeProfile) => set({ storeProfile }),
    }
}))