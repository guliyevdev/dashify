import axios from "axios";

export async function getAllCategories() {
    const token = localStorage.getItem("token");
    return await axios.get('/backend/api/v0/product/category/all', {
        headers: {
            "authorization": token,
        }
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        throw new Error(error.message);
    });
}
export async function updateCategory(data){
    console.log(data)
    const token = localStorage.getItem("token");
    return await axios.put('/backend/api/v0/product/category',data,{
        headers: {
            "authorization": token,
        }
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        throw new Error(error.message);
    });
}