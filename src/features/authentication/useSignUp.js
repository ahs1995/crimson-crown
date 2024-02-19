import { useMutation } from "@tanstack/react-query";
import { signup as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignUp() {
  const { mutate: signUp, isLoading: isSignUpLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "User is successfully created! Please verify the new account from the user's email address."
      );
    },
  });

  return { signUp, isSignUpLoading };
}

export default useSignUp;
