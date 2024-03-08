import { api } from "./axios";

export const login = async (github_code: string) => {
  const response = await api.post(`/auth?code=${github_code}`);

  return response;
};

