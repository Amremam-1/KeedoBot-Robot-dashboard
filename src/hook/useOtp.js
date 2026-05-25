import { useMutation } from "@tanstack/react-query"

import { sendOtp } from "../api/Auth/auth.api"

import toast from "react-hot-toast"

import { useState } from "react"
import { setItem } from "../utils/storage"

export const useOtp = () => {
  const [otp, setOtp] =
    useState("")

  const mutation =
    useMutation({
      mutationFn: sendOtp,
    })

  const submit = async (
    data
  ) => {
    try {
      const response =
        await mutation.mutateAsync({
          phone_number:
            data.phone_number,
        })

      setItem("phone_number",data.phone_number)
      setOtp(
        response.otp_debug
      )

      toast.success(
        response.message
      )

      return {
        success: true,
      }
    } catch (error) {
      console.log(error)

      toast.error(
        error.response?.data
          ?.message ||
          "Something went wrong"
      )

      return {
        success: false,
      }
    }
  }

  return {
    submit,

    isPending:
      mutation.isPending,

    otp,
  }
}