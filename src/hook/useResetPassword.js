import { useMutation } from "@tanstack/react-query"

import { resetPassword } from "../api/Auth/auth.api"

import toast from "react-hot-toast"

export const useResetPassword =
  () => {
    const mutation =
      useMutation({
        mutationFn:
          resetPassword,
      })

    const submit = async (
      data
    ) => {
      try {
        const response =
          await mutation.mutateAsync(
            {
              phone_number:
                data.phone_number,

              otp: data.otp,

              new_password:
                data.new_password,
            }
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
    }
  }
