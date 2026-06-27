import { api } from "@/shared/api";

export async function getStudent(lang = 'uk') {
  try {
    const response = await api.get("/profile", {
      headers: {
        "Accept-Language": lang
      }
    })
    return response.data;
  }
  catch (err) {
    if (err.response) {
      if (err.response.status === 401) {
        throw {
            status: 401
        };
      }
    }
    throw {
        status: 500
    };
  }
}