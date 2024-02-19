import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking with ${data.id} is checked out successfully!`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error("There was an error while checkin out");
    },
  });

  return { checkout, isCheckingout };
}

export default useCheckout;
