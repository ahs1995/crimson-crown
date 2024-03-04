import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import { useState } from "react";
import ConfirmLogout from "../../ui/ConfirmLogout";
import useUser from "./useUser";

// Simple one Click logout

// function Logout() {
//   const { logout, isLogoutLoading } = useLogout();
//   return (
//     <ButtonIcon onClick={logout}>
//       {!isLogoutLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
//     </ButtonIcon>
//   );
// }

// export default Logout;

// Logout with confirmation modal

function Logout() {
  const [modalOpen, setModalOpen] = useState(false);
  const { logout, isLogoutLoading } = useLogout();
  const { user, isLoadingUser } = useUser();

  function handleIconClick() {
    setModalOpen((open) => !open);
  }
  return (
    <>
      <ButtonIcon onClick={handleIconClick}>
        {!isLogoutLoading || !isLoadingUser ? (
          <HiArrowRightOnRectangle />
        ) : (
          <SpinnerMini />
        )}
      </ButtonIcon>
      {modalOpen && (
        <ConfirmLogout
          onConfirm={logout}
          disabled={isLogoutLoading}
          resourceName={user.user_metadata.fullName}
          onCloseModal={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export default Logout;
