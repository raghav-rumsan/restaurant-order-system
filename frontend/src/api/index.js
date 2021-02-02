import axios from "axios";
import Qs from "query-string";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "" //server-live
    : ""; //server-local

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  paramsSerializer: params => {
    return Qs.stringify(params);
    // return Qs.stringify(params, { arrayFormat: "indices" });
  }
});

// api
