import { useQuery } from "@tanstack/react-query";
import { getStudent } from "../api/getStudent";

export function useStudent() {
    return useQuery(useQuery({
        queryKey: ["student", "profile"],
        queryFn: getStudent,
        staleTime: 30 * 60 * 1000
    }));
}