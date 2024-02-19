import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticate data

  const { isLoadingUser, isAuthenticate } = useUser();

  // 2. If there is no authentication return to login

  useEffect(() => {
    if (!isAuthenticate && !isLoadingUser) {
      navigate("/login");
    }
  }, [isAuthenticate, isLoadingUser, navigate]);

  // 3. While loading show a loading spinner

  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4.if there is a user return to dashboard

  if (isAuthenticate) return children;
}

export default ProtectedRoute;
