import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"

import { Link } from "react-router-dom"

import {
  Mail,
  Lock,
  User,
  Phone,
} from "lucide-react"

import { useRegister } from "../../hook/useRegister"

import { registerSchema } from "../../utils/register.schema"

import InputForm from "../../components/form/InputForm"

const RegisterPage = () => {
  const {
    register,
    handleSubmit,

    formState: {
      errors,
      isValid,
    },

    reset,
  } = useForm({
    resolver:
      zodResolver(
        registerSchema
      ),

    mode: "onChange",
  })

  const {
    submit,
    isPending,
  } = useRegister()

  const onSubmit = (data) => {
    submit(data)

    reset()
  }

  return (
    <div>
      {/* Heading */}

      <div className="text-center mb-10">
        <h1 className="text-textPrimary text-4xl md:text-5xl font-black tracking-tight">
          Create Account 🚀
        </h1>

        <p className="text-textSecondary mt-3 text-base">
          Join KeedoBot
        </p>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="space-y-5"
      >
        <InputForm
          id="name"
          type="text"
          placeholder="Enter your full name"
          register={register("name")}
          error={errors.name}
          icon={User}
        />

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
          icon={Phone}
        />

        <InputForm
          id="email"
          type="email"
          placeholder="asmaa@example.com"
          register={register("email")}
          error={errors.email}
          icon={Mail}
        />

        <InputForm
          id="password"
          type="password"
          placeholder="Enter password"
          register={register(
            "password"
          )}
          error={
            errors.password
          }
          icon={Lock}
        />

        <InputForm
          id="password_confirmation"
          type="password"
          placeholder="Confirm password"
          register={register(
            "password_confirmation"
          )}
          error={
            errors.password_confirmation
          }
          icon={Lock}
        />

        <button
          disabled={
            !isValid ||
            isPending
          }
          type="submit"
          className={`
            w-full h-14 rounded-2xl text-lg font-semibold transition-all duration-300 mt-4

            ${
              isValid &&
              !isPending
                ? "bg-gradient-to-r from-primary to-orange-400 hover:scale-[1.02] active:scale-[0.98] text-white shadow-lg"
                : "bg-primary/50 cursor-not-allowed text-white"
            }
          `}
        >
          {isPending
            ? "Loading..."
            : "Create Account"}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-textSecondary">
          Already have an
          account?
        </p>

        <Link
          className="text-primary font-semibold"
          to="/login"
        >
          Login Now
        </Link>
      </div>
    </div>
  )
}

export default RegisterPage