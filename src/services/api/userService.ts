import { api } from "./axios";

export const getAuthenticatedUser = async (token: string) => await api.get("/user", {
    headers: {
        Authorization: `Bearer ${token}`,
    }
});
