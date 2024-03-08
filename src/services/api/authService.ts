import { api } from "./axios";

export const login = async (github_code: string) => {
  const response = await api.post(`/auth?code=${github_code}`);

  return response;
};

export const register = async (github_code: string) => {
  const response = await api.post(`/auth/register?code=${github_code}`);
  return response.data;
};

export const getCode = async () => {
  const { data } = await api.get(`/auth/code`);
  console.log(data);
  return data;
};
