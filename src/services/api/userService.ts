import { api } from "./axios";

export const getAuthenticatedUser = async (token: string) =>
  await api.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const changeTheme = async (token: string, theme: string) =>
  await api.put(
    "/page-config",
    {
      theme,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const changePageIsPublic = async (token: string, isPublic: boolean) =>
  await api.put(
    "/page-config",
    {
      page_is_public: isPublic,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const updatePageData = async (token: string) =>
  await api.put(
    "/page-config",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getPageData = async (slug: string) =>
  await api.get(`/user/${slug}`);

export const listUsers = async () => await api.get("/users");
