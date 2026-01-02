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

export async function sendActivationList(email) {
  try {
    const response = await api.post("/auth/resend-confirmation", {email: email})
    return 200
  }
  catch (err) {
    if (err.response) {
      if (err.response.status === 429) throw {code: 429}
    }
    throw {code: 500}
  }
}