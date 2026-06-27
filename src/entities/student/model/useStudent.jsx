import { useQuery } from "@tanstack/react-query";
import { getStudent } from "../api/getStudent";

export function useStudent(lang = "uk", options = {}) {
    return useQuery({
        queryKey: ["student", "profile", lang],
        queryFn: () => getStudent(lang),
        staleTime: 30 * 60 * 1000,
        ...options
    });
}