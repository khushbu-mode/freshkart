import api from "../Api/api";



export const getProducts = () => {
return api.get("/products");
}

export const getProductById = (id) => {
    return api.get(`/products/${id}`);
}

export const getCategories = () => {
    return api.get("/products/categories");
}   

export const getProductByCategory = (category) => {
return api.get(`/products/category/${category}`);
}