import axios from "axios";

// Create an instance of Axios with a base URL
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

// Request interceptor
axiosClient.interceptors.request.use((config) => {
    // Modify the request config if needed
    return config;
})

// Response interceptor
axiosClient.interceptors.response.use((response) => {
    // Handle successful responses
    return response;
}, (error) => {
    try {
        const { response } = error;

        if (response === 401) {
            // Handle specific error code (401 Unauthorized)
            // You can add custom logic here
        } else {
            // Handle other HTTP statuses
            // You can define additional error handling logic
        }
    } catch (error) {
        // Handle unexpected errors
        console.log(error);
    }

    // Re-throw the error to propagate it further
    throw error;
})
export default axiosClient;
