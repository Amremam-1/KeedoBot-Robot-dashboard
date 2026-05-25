import {useQuery} from "@tanstack/react-query"
import { getUsers } from "../api/user/user.api"

export const useGetAllUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    })
}

