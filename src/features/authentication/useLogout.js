import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const QueryClient = useQueryClient();
  const { mutate: logout, isLoading: isLogoutLoading } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      navigate("/login");
      QueryClient.removeQueries();
    },

    onError: () => {
      toast.error("Logout failed");
    },
  });

  return { logout, isLogoutLoading };
}

export default useLogout;
