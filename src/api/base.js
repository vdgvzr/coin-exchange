import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_PAPRIKA_URL
  ? import.meta.env.VITE_PAPRIKA_URL
  : "https://api.coinpaprika.com/v1/";

export const baseApi = axios.create({});
