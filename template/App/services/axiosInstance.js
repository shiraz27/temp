import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BACKEND_URL } from "../../config/env";

const headers = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    console.log("token", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
