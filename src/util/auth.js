import { redirect } from "react-router-dom";
import api from "./axios";

export async function logout() {
  try {
    const respone = await api.post("/auth/logout");
    return redirect("/login")
  }
  catch (err) {
    if (err.response) {
      if (err.response.status === 401) 
        return redirect('/login')
    }
    
    throw new Response(
      { message: "Сервер не надав відповіді" },
      { status: 500 }
    );
  }
}

export async function getAuthStatus() {
  try {
    const response = await api.get("/auth/check");
    return true
  }
  catch (err) {
    return false;
  }
}

export async function sendActivationList(email) {
  try {
    const response = await api.post("/auth/resend-confirmation", {email: email})
    return 200
  }
  catch (err) {
    if (err.response) {
      if (err.response.status === 429) return 429
    }
    return 500
  }
}