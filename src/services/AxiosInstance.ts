import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 1000,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*"
    },
    responseType: "json",
    responseEncoding: 'utf8'
});