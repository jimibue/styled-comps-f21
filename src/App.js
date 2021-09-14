import "./App.css";
import { Container, Header, Segment } from "semantic-ui-react";
import styled from "styled-components";
import HeaderText from "./components/HeaderText";

function App() {
  return (
    <AppContainer>
      <HeaderText size="large">Header Text component</HeaderText>
      <Segment as={Transparent}>
        <HeaderText size="med">My Projects</HeaderText>
      </Segment>
      <Segment as={Transparent}>
        <HeaderText>Contacts</HeaderText>
      </Segment>
    </AppContainer>
  );
}

const Transparent = styled.div`
  background: transparent !important;
`;
const AppContainer = styled.div`
  min-height: 100vh;
  background: rgb(253, 75, 29);
  background: linear-gradient(
    90deg,
    rgba(253, 75, 29, 1) 5%,
    rgba(252, 153, 69, 1) 100%
  );
`;

export default App;
