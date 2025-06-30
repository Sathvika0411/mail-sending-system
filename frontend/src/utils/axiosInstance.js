import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mail-sending-system.onrender.com/api",
});

export default axiosInstance;
