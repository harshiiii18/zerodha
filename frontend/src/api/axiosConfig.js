import axios from "axios";

const instance = axios.create({
  baseURL: "https://zerodha-0pzb.onrender.com",
});

export default instance;