export async function getStudent() {
  try {
    const response = await api.get("/profile")
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