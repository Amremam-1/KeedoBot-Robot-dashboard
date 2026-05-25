import {api} from "../index"


export const getUsers = async () => {
    const res = await api.get("/robots/admin/keedo-users")

    return res.data
}

export const getRobots = async () => {
    const res = await api.get("/robots/admin/all")

    return res.data
}