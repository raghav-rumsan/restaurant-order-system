import axios from "axios";
import Qs from "query-string";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "" //server-live
    : "http://localhost:8080"; //server-local

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
