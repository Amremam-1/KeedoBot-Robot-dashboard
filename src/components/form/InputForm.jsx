import ErrorMessage from "./ErrorMessage"

const InputForm = ({
  id,
  type,
  placeholder,
  register,
  error,
  icon: Icon,
}) => {
  return (
    <div>
      <div className="relative">
        {Icon && (
          <Icon
            className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"
            size={20}
          />
        )}

        <input
          {...register}
          id={id}
          type={type}
          placeholder={placeholder}
          className={`
            w-full h-14 pl-12 pr-4 rounded-2xl
            border bg-orange-50/50
            focus:outline-none focus:ring-4 transition-all

            ${
              error
                ? "border-danger focus:ring-red-200"
                : "border-orange-100 focus:ring-orange-200"
            }
          `}
        />
      </div>

      <ErrorMessage
        error={error}
      />
    </div>
  )
}

export default InputForm