import { create } from "zustand";
import { StoreProfileProps } from "./StoreProfile";



export type ListStoreProps = StoreProfileProps[];
type ActionsListStoreProps = {
    setListStore: (store: ListStoreProps) => void;
};

type StoreListStoresProps = {
    listStores: ListStoreProps;
    actions: ActionsListStoreProps;
}

const initialListStores: ListStoreProps = [];

export const useListStores = create<StoreListStoresProps>((set) => ({
    listStores: initialListStores,
    actions: {
        setListStore: (listStores) => set({ listStores }),
    }
}))