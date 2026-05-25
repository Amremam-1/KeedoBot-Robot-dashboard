
import { api } from "../index"

export const loginUser = async (data) => {
  const res = await api.post("/auth/login", data)

  return res.data
}

export const registerUser = async (data) => {
  const res = await api.post("/auth/register", data)

  return res.data
}


export const sendOtp = async (data) => {
  const res = await api.post("/auth/send-otp", data)

  return res.data
}



export const resetPassword = async (data) => {
  const res = await api.post("auth/forgot-password", data)

  return res.data
}