/* eslint-disable no-restricted-globals */
import { Button, Col, Grid, Icon, Loader, Row } from "rsuite";
import "../App.css";
import { useProfile } from "../context/profile.context";
import { Redirect } from "react-router";
import { Container, Header, Content, Footer, FlexboxGrid } from "rsuite";
import { auth } from "../misc/firebase";
import { useCallback } from "react";
import AvatarUploadBtn from "../component/AvatarUploadBtn";
import Score from "../component/Score";
import StartBtn from "../component/StartBtn";
const Home = () => {
  const { profile, isLoding } = useProfile();
  console.log(profile, isLoding);
  const onSignOut = useCallback(() => {
    auth.signOut();
    alert("you are signed out", 5000);
    close();
  }, []);
  if (isLoding && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" content="Loading" speed="slow" />
      </Container>
    );
  }

  if (!isLoding && !profile) {
    return <Redirect to="/" />;
  }

  return (
    <div className="home">
      <Container>
        <Header>
          <Grid>
            <Row>
              <Col className="header" xs={12}>
               <AvatarUploadBtn />
              </Col>
              <Col className="header" xs={12}>
                 <h4>Welcome to QuizUp</h4>
                 <div className="user-name"> {profile.name}</div>
              </Col>
            </Row>
          </Grid>
        </Header>
        <Content>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item as={Col} colspan={24} md={6}>
              <div className="content"> 
                <StartBtn />
              </div>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item as={Col} colspan={24} md={6}>
              <div className="content">
                <Score />
              </div>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
        <Footer>
          <Grid>
            <Row>
              <Col xs={12}>
                <div className="div-footer">
                  <Button
                    className="footer-btn"
                    block
                    color="red"
                    appearance="primary"
                    onClick={onSignOut}
                  >
                    LOGOUT
                  </Button>
                </div>
              </Col>
              <Col xs={12}>
                <div className="div-footer">
                  <Button
                    className="footer-btn"
                    block
                    color="green"
                    appearance="primary"
                  >
                    <Icon size="lg" icon="linkedin" />
                    <a
                      className="footer-a"
                      href="https://www.linkedin.com/in/anusha-srivastava-ab8a4616a/"
                    >
                      CONTACT US
                    </a>
                  </Button>
                </div>
              </Col>
            </Row>
          </Grid>
        </Footer>
      </Container>
    </div>
  );
};

export default Home;
