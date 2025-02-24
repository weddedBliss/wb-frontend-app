import axios from "axios";
import { API_BASE_URL } from "./url";

const token = localStorage.getItem("token");

export const registerBusiness = async (data) =>
  axios.post(`${API_BASE_URL}/business/register-business`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
