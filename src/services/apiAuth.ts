import axios from 'axios';
export async function login({ username, password }) {
    const response = await axios.post('/backend/api/v0/user/login', {
        username,
        password
    }).then((response) => {
        localStorage.setItem("token", response.data.token);
        return response;
    }).catch((error) => {
        throw new Error(error.message);
    });
    return response.data;
}