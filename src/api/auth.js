import axios from "axios";
import { API_BASE_URL } from "./url";

export const register = async (userData) =>
  axios.post(`${API_BASE_URL}/auth/register`, userData);

export const login = async (userData) =>
  axios.post(`${API_BASE_URL}/auth/login`, userData);
