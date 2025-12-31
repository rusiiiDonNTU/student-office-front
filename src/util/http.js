import { redirect } from "react-router-dom";
import api from "./axios";


export async function getStudent() {
  try {
    const response = await api.get("/profile")
    return response.data;
  }
  catch (err) {
    if (err.response) {
      if (err.response.status === 401) {
        return redirect('/logout')
      }
    }
    throw {
        message: "Сервер не надав відповіді",
        status: 500
    };
  }
}