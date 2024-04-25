import axios from "axios";

export async function getAllCategories(size: number, current: number) {
    console.log(size, current)
    const token = localStorage.getItem("token");
    return await axios.get('/backend/api/v0/product/category/all', {
        headers: {
            "authorization": token,
        },
        params: {
            pageSize: size,
            pageNo: current
        }
    }).then((res) => {
        console.log(res.data)
        return res.data;
    }).catch((error) => {
        throw new Error(error.message);
    });
}
export async function updateCategory(data){
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
export async function updateCategoryActivity(data){
    const token = localStorage.getItem("token");
    return await axios.put('/backend/api/v0/product/category/edit-activities',data,{
        headers: {
            "authorization": token,
        }
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        throw new Error(error.message);
    });
}
export async function addCategory(data){
    const token = localStorage.getItem("token");
    return await axios.post('/backend/api/v0/product/category',data,{
        headers: {
            "authorization": token,
        }
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        throw new Error(error.message);
    });
}