import axios from "axios";
import { API_BASE_URL } from "../app-config";

const commonApis = axios.create({
    baseURL: API_BASE_URL,
    // timeout: 120000,
});

commonApis.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        console.log('commonApi: ', accessToken);
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        } 
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
commonApis.interceptors.response.use(
    (res) => { return res },
    (err) => {
        const {
            config,
            response,
        } = err;
        console.log(err);
        // access token 만료 시
        if (response?.status && response?.status === 403) {
            window.location.href = "/login";
            localStorage.clear();
            return config;
        }
        return Promise.reject(err);
    }
)

export default commonApis;