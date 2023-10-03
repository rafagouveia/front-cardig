import { useProduct } from "../stores/Products";
import { StoreProfileProps, useStoreProfile } from "../stores/StoreProfile";
import api from "../utils/api";


export const getAStore = async (store_name: string) => {
    const { setLoading, setStore } = useStoreProfile.getState().actions

    try {
        setStore({} as StoreProfileProps)
        const response = await api.get<StoreProfileProps>(`/store/${store_name}`);
        setStore(response.data)
        
        return response.data
    } finally {
        setLoading(false)
    }
}