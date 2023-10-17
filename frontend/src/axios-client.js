import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

axiosClient.defaults.headers.common['Accept'] = 'application/json';
axiosClient.defaults.headers.common['Content-Type'] = 'application/json'; 

axiosClient.interceptors.request.use((config) => {
    return config;
})


axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    try {
        const { response } = error;

        if (response === 401) {
            // Do something when error
        } else {
            // Other statuses
        }
    } catch (error) {
        console.log(error);
    }
    throw error;
})
export default axiosClient;
