import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { loginSchema } from "../../utils/register.schema"
import { useLogin } from "../../hook/useLogin"


const LoginPage = () => {
  const [showPassword, setShowpassword] = useState(false)
   const {submit , isPending} =useLogin()


  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data) => {
    submit(data)

    reset()
  }

  return (
    <div>
      <h1 className="text-textPrimary text-3xl md:text-5xl font-semibold text-center">
        Login
      </h1>

      <div className="my-10 text-textPrimary">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}

          <div className="mb-6 flex flex-col">
            <label htmlFor="email" className="mb-3 text-sm opacity-70">
              Email
            </label>

            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="py-2 px-5 w-70 md:w-90 rounded-md border border-borderColor bg-input focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {errors.email && (
              <p className="text-danger text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}

          <div className="mb-6 flex flex-col">
            <label htmlFor="password" className="mb-3 text-sm opacity-70">
              Password
            </label>

            <div className="relative">
              <input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="relative py-2 px-5 w-full md:w-90 rounded-md border border-borderColor bg-input focus:outline-none focus:ring-2 focus:ring-primary pr-12"
              />

              <button
                type="button"
                onClick={() => setShowpassword((prev) => !prev)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-primary"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-danger text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}

          <button
            disabled={!isValid}
            type="submit"
            className={`w-full py-2 rounded-md text-lg font-medium transition ${
              isValid
                ? "bg-primary hover:bg-primaryHover text-white"
                : "bg-primary/50 cursor-not-allowed text-white"
            }`}
          >
            {isPending ? "Loading..": "Login"}
          </button>
        </form>

        {/* Links */}

        <div className="mt-8 flex justify-between items-center">
          <Link
            className="underline text-textSecondary hover:text-primary"
            to="/forget-password"
          >
            Forget Password?
          </Link>

          <Link
            className="underline text-primary hover:opacity-80"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
