import { redirect } from "react-router-dom";
import api from "./axios";

export async function logout() {
  try {
    const respone = await api.post("/auth/logout");
    return redirect("/login")
  }
  catch (err) {
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
  catch {
    return false;
  }
}
