import React, { useEffect } from "react";
import firebase from "firebase/app";
import intro from "../image/intro-img.jpg";
import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from "rsuite";
import { auth, database } from "../misc/firebase";
import {Link} from 'react-router-dom';
import { useProfile } from "../context/profile.context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignIn = () => {
  const {profile,isLoding} = useProfile();
  const history =useHistory();
  useEffect(()=>{
    if(profile &&  !isLoding){
      history.push("/home");
    } else{
      history.push("/")
    }
  },[profile,isLoding,history]);
  const signInWithProvider = async (Provider) => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(Provider);
      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      Alert.success("you are logged", 4000);
    } catch (err) {
      Alert.info(err.message, 4000);
    }
  };
  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel className="welcome-wrap">
              <div className="welcome">
                <h2>Welcome to QuizUp</h2>
                <p>PLAY & WIN</p>
              </div>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel className="welcome-wrap">
              <div>
                <Button
                  block
                  color="violet"
                  appearance="primary"
                  onClick={onGoogleSignIn}
                >
                  <h6>
                    {" "}
                    <Icon icon="google" size="lg" /> Continue with Google
                  </h6>
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel className="intro-wrap">
              <div className="into-img">
                <img className="into" src={intro} alt="intro" />
              </div>
            </Panel>
          </Col>
        </Row>
        
      </Grid>
    </Container>
  );
};

export default SignIn;
