import api from "../Api/api";

export const loginUser = (data) => {
  return api.post("/auth/login", data);
};