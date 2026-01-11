import { useQuery } from "@tanstack/react-query";
import { authStatusQueryOptions } from "../api/queries";

export function useAuthStatus() {
    return useQuery(authStatusQueryOptions());
}