import axios from "axios";
import { API_BASE_URL } from "./url";

export const getUserByEmail = async (email) =>
  axios.get(`${API_BASE_URL}/user/email/${email}`);

export const getLoggedUser = async (token) =>
  axios.get(`${API_BASE_URL}/user/me`, {
    headers: {
      Authorization: `Bearer ${token}`, // Attach token to request
    },
  });
