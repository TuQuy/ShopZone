// Ở đây gọi API
import { Product } from "../Interfaces";
import { authAxios, axi } from "./useAxios";


export const get_solo_prod = async (id: number) => {
    const response = await authAxios.get(`/products/get/admin/${id}/`)
    return response.data
};

export const edit_product = async (data: Product) => {
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("count_in_stock", data.count_in_stock.toString())
    formData.append("category", data.category)
    formData.append("price", data.price.toString())
    if(data.image){
        formData.append("image", data.image)
    }
    await authAxios.put(`/products/edit/${data.id}/`, formData)


};

export const delete_product = async (id: number) => {
    await authAxios.delete(`/products/delete/${id}/`)
};

export const post_product = async (data: Product) => {
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("count_in_stock", data.count_in_stock.toString())
    formData.append("category", data.category)
    formData.append("price", data.price.toString())
    if(data.image){
        formData.append("image", data.image)
    }
    await authAxios.post('/products/post/', formData)


};


export const get_products = async ({ pageParam = 1}) =>{
    const response = await axi.get(`/products/?page=${pageParam}&pages=9`)
    return response.data
};