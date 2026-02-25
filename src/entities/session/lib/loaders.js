import { queryClient } from "@/shared/api";
import { redirect } from "react-router-dom";
import { i18n } from "@/shared/config";
import { authStatusQueryOptions } from "../api/queries";

export async function rootLoader() {
  const authStatus = await queryClient.ensureQueryData(
    authStatusQueryOptions(),
  );

  if (authStatus) return redirect("/profile");
  else return redirect("/login");
}

export async function authLoader({ request }) {
  const authStatus = await queryClient.ensureQueryData(
    authStatusQueryOptions(),
  );

  if (authStatus) {
    return redirect("/profile");
  } else return null;
}

export async function dashLoader() {
  const authStatus = await queryClient.ensureQueryData(
    authStatusQueryOptions(),
  );

  if (authStatus) return null;
  else {
    await i18n.loadNamespaces([
      "profile",
      "settings",
      "schedule",
      "performance",
      "docs",
    ]);
    return redirect("/login");
  }
}
