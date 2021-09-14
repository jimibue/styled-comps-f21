import "./App.css";
import {
  Card,
  Container,
  Grid,
  GridRow,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import HeaderText from "./components/HeaderText";
import axios from "axios";
import { useState, useEffect } from "react";
import { device, primaryColor } from "./query";

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
        <Grid.Column key={r.id} mobile={16} tablet={8} computer={4}>
          <StyleCard fluid>
            <Card.Content>
              <Card.Header>
                <Truncated>{r.full_name}</Truncated>
              </Card.Header>
              <Card.Meta>
                Issues: {r.open_issues}
                {r.stargazers_count > 0 && (
                  <Star>
                    <Icon size="large" name="star" />
                  </Star>
                )}
              </Card.Meta>
              <Card.Description>{r.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <ButtonLink href={r.html_url} target="_blank">
                view
              </ButtonLink>
            </Card.Content>
          </StyleCard>
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
          <Grid.Row stretched>{renderRepos()}</Grid.Row>
        </Grid>
      </Segment>
      <Segment as={Transparent}>
        <HeaderText>Contacts</HeaderText>
      </Segment>
      <CardWrapper>
        <MyCard>yo</MyCard>
        <MyCard>yo</MyCard>
        <MyCard>yo</MyCard>
        <MyCard>yo</MyCard>
        <MyCard>yo</MyCard>
        <MyCard>yo</MyCard>
      </CardWrapper>
    </AppContainer>
  );
}

const MyCard = styled.div`
  margin: 20px;
  width: 200px;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${primaryColor};
  @media ${device.laptop} {
    flex-direction: column;
    background-color: green;
  }
  @media ${device.mobileL} {
    flex-direction: column;
    background-color: purple;
  }
`;
const ButtonLink = styled.a`
  float: right;
  padding: 10px 30px;
  border-raduis: 10px;
  color: white !important;
  background-color: ${primaryColor};

  &:hover {
    background: pink;
  }

  &:visited {
    background: orange;
  }
`;

const rotate360 = keyframes`
from {
  transform:rotate(0deg);
  color: red;
}
to {
  transform:rotate(360deg);
  color: blue;
}
`;
const Star = styled.div`
  fontsize: 30px;
  display: inline-block;
  color: red;
  animation: ${rotate360} 2s linear infinite;
`;
const Truncated = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StyleCard = styled(Card)`
  height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

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
