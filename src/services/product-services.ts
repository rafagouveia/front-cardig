import api from "../utils/api"

export const getAProduct = async (id: string) => {
  const {data } = await api.get(`/product/${id}`)
  return data
}