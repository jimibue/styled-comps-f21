import "./App.css";
import {
  Card,
  Container,
  Grid,
  GridRow,
  Header,
  Segment,
} from "semantic-ui-react";
import styled from "styled-components";
import HeaderText from "./components/HeaderText";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    // onmount
    getRepos();
    // this function would be call on unmount
    // return () => {
    //   console.log("unmount");
    // };
  }, []);

  const getRepos = async () => {
    try {
      let res = await axios.get(
        "https://api.github.com/users/facebook/repos?sort=created"
      );
      setRepos(res.data);
    } catch (err) {}
  };

  const renderRepos = () => {
    return repos.map((r) => {
      return (
        <Grid.Column key={r.id} width={4}>
          <Card>
            <Card.Content>
              <Card.Header>{r.name}</Card.Header>
            </Card.Content>
            <Card.Meta>{r.description}</Card.Meta>
          </Card>
        </Grid.Column>
      );
    });
  };

  return (
    <AppContainer>
      <HeaderText size="large">Header Text component</HeaderText>
      <Segment as={Transparent}>
        <HeaderText size="med">My Projects</HeaderText>
        <Grid>
          <Grid.Row>{renderRepos()}</Grid.Row>
        </Grid>
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
