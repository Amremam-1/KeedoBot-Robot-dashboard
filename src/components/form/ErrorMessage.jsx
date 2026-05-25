
const ErrorMessage = ({
  error,
}) => {
  if (!error) return null

  return (
    <p className="text-danger text-sm mt-2">
      {error.message}
    </p>
  )
}

export default ErrorMessage