import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1 -- Load the user and store it into the query cache
  const { isLoading, isAuthetificated } = useUser();

  //2-- while loading the user
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  //3- if no user redirect to login
  if (!isAuthetificated) {
    navigate("/login");
  }

  if (isAuthetificated) return children;
}

export default ProtectedRoute;
