import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "https://mini-audit-trail-s7om.onrender.com/api",
});
