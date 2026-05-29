import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { changeStatus, getRobots } from "../api/user/user.api";
import toast from "react-hot-toast";

export const useGetAllRobots = () => {
  return useQuery({
    queryKey: ["robots"],
    queryFn: getRobots,
  });
};

// change status (Change assign)

export const useToggleStatus = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: changeStatus,

    onSuccess: (res) => {
      toast.success(res.message);

      queryClient.invalidateQueries({
        queryKey: ["robots"],
      });
    },

    onError: (res) => {
      toast.error(res.message);
    },
  });

  const submit = (robot_serial_number) => {
    mutation.mutate(robot_serial_number);
  };

  return {
    submit,
    isPending: mutation.isPending,
  };
};
