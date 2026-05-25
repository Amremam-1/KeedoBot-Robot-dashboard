// components/modal/ForgetPasswordModal.jsx

import { useState } from "react"

import OtpInput from "react-otp-input"

import { useResetPassword } from "../../hook/useResetPassword"

import { clearLocal, getItem } from "../../utils/storage"

const ForgetPasswordModal = ({
  open,
  onClose,
  otp,
}) => {
  const [newPassword,
    setNewPassword] =
    useState("")

  const {
    submit,
    isPending,
  } = useResetPassword()

  if (!open) return null

  // PHONE FROM LOCAL

  const phone_number =
    getItem("phone_number")

  // VERIFY

  const handleVerify =
    async () => {
      const response =
        await submit({
          phone_number: phone_number,
        

          otp,

          new_password:
            newPassword,
        })

      if (response.success) {
        clearLocal()
        onClose()
      }
    }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-md rounded-3xl bg-card border border-borderColor p-6 shadow-2xl">
        {/* Header */}

        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-primary to-orange-400 flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg">
            🔐
          </div>

          <h2 className="mt-4 text-2xl font-bold text-textPrimary">
            Verify OTP
          </h2>

          <p className="text-sm text-textSecondary mt-2">
            OTP inserted automatically
          </p>
        </div>

        {/* OTP */}

        <div>
          <label className="text-sm font-medium text-textSecondary block mb-3">
            OTP Code
          </label>

          <div className="flex justify-center">
            <OtpInput
              value={otp}
              numInputs={6}
              renderSeparator={
                <span className="w-2"></span>
              }
              renderInput={(
                props
              ) => (
                <input
                  {...props}
                  disabled
                  className="
                    !w-12
                    !h-14
                    rounded-2xl
                    border
                    border-borderColor
                    bg-orange-50/50
                    text-center
                    text-lg
                    font-bold
                    text-textPrimary
                    focus:outline-none
                  "
                />
              )}
            />
          </div>
        </div>

        {/* PASSWORD */}

        <div className="mt-5">
          <label className="text-sm font-medium text-textSecondary block mb-2">
            New Password
          </label>

          <input
            type="password"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(
                e.target.value
              )
            }
            placeholder="Enter new password"
            className="
              w-full h-14 px-5
              rounded-2xl
              border border-borderColor
              bg-orange-50/50
              focus:outline-none
              focus:ring-4
              focus:ring-orange-200
            "
          />
        </div>

        {/* BUTTON */}

        <button
          onClick={handleVerify}
          disabled={
            isPending ||
            !newPassword
          }
          className="
            w-full h-14 mt-6
            rounded-2xl
            bg-gradient-to-r
            from-primary
            to-orange-400
            text-white
            font-semibold
            shadow-lg
            disabled:opacity-50
          "
        >
          {isPending
            ? "Loading..."
            : "Confirm"}
        </button>

        {/* CLOSE */}

        <button
          onClick={onClose}
          className="w-full mt-4 text-textSecondary hover:text-primary"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ForgetPasswordModal