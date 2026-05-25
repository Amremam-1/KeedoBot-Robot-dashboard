import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/Auth/auth.api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { clearLocal } from "../utils/storage";

export const useRegister = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerUser,

    onSuccess: (response) => {
      
      toast.success(response.message);
      navigate("/login");
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
        name: data.name,
        phone_number:data.phone_number,
        email: data.email,
        password: data.password,
        password_confirmation:data.password_confirmation
    })
  }

  return {
    submit,
    isPending: mutation.isPending,
  }
};
