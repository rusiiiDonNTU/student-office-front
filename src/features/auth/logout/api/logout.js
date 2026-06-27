import { api, queryClient } from "@/shared/api";
import { redirect } from "react-router-dom";

export async function logout({ request }) {
  const url = new URL(request.url);
  let redURL = "/login";
  console.log(url);

  try {
    const response = await api.post("/auth/logout");

    if (url.search.includes("redirect")) {
      redURL = "/" + url.searchParams.get("redirect");
      if (url.search.includes("redirect")) {
        const token = url.searchParams.get("token");
        redURL += "?token=" + token;
      }
    }

    return redirect(redURL);
  } catch (err) {
    console.log(err);
    if (err.response) {
      if (err.response.status === 401) return redirect(redURL);
    }

    throw new Response(
      { message: "Сервер не надав відповіді" },
      { status: 500 },
    );
  } finally {
    queryClient.clear();
  }
}
