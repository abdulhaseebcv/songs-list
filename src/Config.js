import axios from "axios";

// Create an Axios instance with a specified base URL
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_API
});

export default axiosInstance;