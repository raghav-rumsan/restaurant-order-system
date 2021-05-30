import axios from "axios";
import Qs from "query-string";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log(`process.env`, process.env);

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  paramsSerializer: (params) => {
    return Qs.stringify(params);
    // return Qs.stringify(params, { arrayFormat: "indices" });
  },
});

// api

export const loginPost = (data) => api.post(`/v1/auth/login`, { ...data });
export const userDetailGet = (id) => api.get(`/v1/users/${id}`);

export const createClients = (data) => api.post(`/v1/users`, data);
export const clientsGet = () => api.get("/v1/users");
