import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://african-marketplace-tt7.herokuapp.com/swagger-ui.html",
        headers: {
            Authorization: token
        }
    })
}