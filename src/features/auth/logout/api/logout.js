import { api, queryClient } from "@/shared/api";
import { redirect } from "react-router-dom";

export async function logout() {
  try {
    const response = await api.post("/auth/logout");
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
  finally {
    queryClient.clear();
  }
}