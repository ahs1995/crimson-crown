import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "@uidotdev/usehooks";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  overflow: hidden;
`;

const StyledConfirmLogout = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmLogout({ resourceName, onConfirm, disabled, onCloseModal }) {
  useLockBodyScroll();

  return createPortal(
    <Overlay>
      <StyledModal>
        <StyledConfirmLogout>
          <Heading as="h3">Logout {resourceName}</Heading>
          <p>Are you sure you want to log out from this account?</p>

          <div>
            <Button
              $variations="secondary"
              disabled={disabled}
              onClick={onCloseModal}
            >
              Cancel
            </Button>
            <Button disabled={disabled} onClick={onConfirm}>
              Log out
            </Button>
          </div>
        </StyledConfirmLogout>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default ConfirmLogout;
