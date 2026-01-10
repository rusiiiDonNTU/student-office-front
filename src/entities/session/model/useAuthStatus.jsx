import { useQuery } from "@tanstack/react-query";
import { getAuthStatus } from "../api/getAuthStatus";

export function useAuthStatus() {
    return useQuery({
        queryKey: ["session"],
        queryFn: getAuthStatus,
        staleTime: 30 * 60 * 1000,
        retry: false
    })
}