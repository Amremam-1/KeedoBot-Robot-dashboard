// pages/auth/ForgetPasswordPage.jsx

import { Link } from "react-router-dom"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { MdPhoneIphone } from "react-icons/md"
import { useOtp } from "../../hook/useOtp"
import ForgetPasswordModal from "../../components/modal/ForgetPasswordModal"
import InputForm from "../../components/form/InputForm"
import { forgetPasswordSchema } from "../../utils/register.schema"

const ForgetPasswordPage = () => {
  const [openModal,
    setOpenModal] =
    useState(false)

  const {
    submit,
    isPending,
    otp,
  } = useOtp()

  const {
    register,
    handleSubmit,

    formState: {
      errors,
      isValid,
    },
  } = useForm({
    resolver:
      zodResolver(
        forgetPasswordSchema
      ),

    mode: "onChange",
  })

const onSubmit = async (
  data
) => {
  const response =
    await submit(data)

  if (response.success) {
    setOpenModal(true)
  }
}

  return (
    <>
      {/* OTP MODAL */}

      <ForgetPasswordModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
        otp={otp}
      />

      <div className="w-full max-w-md mx-auto">
        {/* Header */}

        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-primary to-orange-400 flex items-center justify-center text-white text-3xl font-bold mx-auto shadow-lg">
            🔒
          </div>

          <h1 className="mt-6 text-4xl font-black text-textPrimary">
            Forget Password
          </h1>

          <p className="mt-3 text-textSecondary leading-relaxed">
            Enter your mobile
            number and we’ll send
            you an OTP code to
            reset your password.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="space-y-5"
        >
          {/* Phone */}

          <div>
            <label className="text-sm font-medium text-textSecondary block mb-2">
              Mobile Number
            </label>

            <InputForm
              id="phone_number"
              type="text"
              placeholder="0500000000"
              register={register(
                "phone_number"
              )}
              error={
                errors.phone_number
              }
              icon={
                MdPhoneIphone
              }
            />
          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={
              !isValid ||
              isPending
            }
            className="
              w-full h-14
              rounded-2xl
              bg-gradient-to-r
              from-primary
              to-orange-400
              text-white
              font-semibold
              shadow-lg
              hover:scale-[1.02]
              active:scale-[0.98]
              transition-all duration-300
              disabled:opacity-50
            "
          >
            {isPending
              ? "Loading..."
              : "Send OTP"}
          </button>
        </form>

        {/* Back */}

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="text-primary font-medium hover:opacity-80"
          >
            Back To Login
          </Link>
        </div>
      </div>
    </>
  )
}

export default ForgetPasswordPage