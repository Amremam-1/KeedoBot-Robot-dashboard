import { useQuery } from "@tanstack/react-query"
import { getRobots } from "../api/user/user.api"


export const useGetAllRobots = () => {
    return (
        useQuery({
            queryKey: "robots",
            queryFn: getRobots
        })
    )
}