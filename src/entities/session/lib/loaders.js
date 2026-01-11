import { queryClient } from "@/shared/api";
import { redirect } from "react-router-dom";
import { authStatusQueryOptions } from "../api/queries";

export async function rootLoader() {
    const authStatus = await queryClient.ensureQueryData(authStatusQueryOptions());

    if (authStatus) 
        return redirect("/profile")
    else
        return redirect("/login")
}

export async function authLoader() {
    const authStatus = await queryClient.ensureQueryData(authStatusQueryOptions());

    if (authStatus) 
        return redirect("/profile")
    else
        return null
}

export async function dashLoader() {
    const authStatus = await queryClient.ensureQueryData(authStatusQueryOptions());

    if (authStatus) 
        return null
    else
        return redirect("/login")
}

