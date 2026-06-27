import { getAuthStatus } from "./requests";

export function authStatusQueryOptions() {
    return {
        queryKey: ["session"],
        queryFn: getAuthStatus,
        staleTime: 30 * 60 * 1000,
        retry: false
    }
}