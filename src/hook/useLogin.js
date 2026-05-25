import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/Auth/auth.api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { clearLocal, setItem, setToken } from "../utils/storage";

export const useLogin = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: loginUser,

    onSuccess: (response) => {
      // save token
      setToken(response.token)

      // save user
      setItem("user",response.user)

      toast.success(response.message);
      navigate("/dashboard");
    },

     onError: (error) => {
      console.log(error)

      toast.error(
        error.response?.data?.message ||
          "Invalid credentials"
      )
      clearLocal()
    }, 
  });

  const submit = (data) => {
    mutation.mutate({
      email: data.email,
      password: data.password,
    })
  }

  return {
    submit,
    isPending: mutation.isPending,
  }
};
