import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
export const publicRequest =  axios.create({

    baseURL : BASE_URL,
});


const TOKEN = localStorage.getItem("token")?.accessToken ;

export const loginRequest = axios.create({
    baseURL: BASE_URL ,
    headers: {token:`Bearer ${TOKEN}`},
})