import { api } from "@/shared/api";

export async function getAuthStatus() {
  try {
    const response = await api.get("/auth/check");
    return true
  }
  catch (err) {
    if (err.response && err.response.status === 401) {
       return false;
    }

    throw error;
  }
}