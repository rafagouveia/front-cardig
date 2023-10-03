import { useCategory } from "../stores/Category";
import api from "../utils/api";

export const getAllStores = async () => {

    const response = await api.get("/home/get-categories-stores");
    useCategory.getState().actions.addCategory(response.data)
    console.log(response.data)
    return response.data
}