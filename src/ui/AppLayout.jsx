import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  background-color: green;
  padding: 4rem 4.8rem 6.4rem;
  background-color: var(--color-grey-50);
  overflow: scroll;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: calc(-49px + 100vh);
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Note = styled.div`
  background-color: var(--color-yellow-100);
  width: 100%;
  padding: 1.2rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 1.2rem;
`;

function AppLayout() {
  return (
    <>
      <Note>
        👋 Note: Data mutations (create, update, delete) are deactivated in this
        demo app. If you'd like full control, feel free to DM me.
      </Note>
      <StyledAppLayout>
        <Header />
        <Sidebar />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
