import { authStatusQueryOptions } from "@/entities/session";
import { getCheckResetToken } from "@/features/auth";
import { queryClient } from "@/shared/api";
import { redirect } from "react-router-dom";

export async function resetPasswordLoader({ request }) {
  // Парсінг URL
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const authStatus = await queryClient.ensureQueryData(
    authStatusQueryOptions(),
  );

  // Перевірка токену
  if (token !== null) {
    const res = await getCheckResetToken(token);

    if (res) {
      if (authStatus) return redirect(`/profile?reset=true&token=${token}`);
      return {
        token,
        valid: true,
      };
    }
  }

  if (authStatus) return redirect(`/profile?reset=true&token=false`);

  return {
    token,
    valid: false,
  };
}
