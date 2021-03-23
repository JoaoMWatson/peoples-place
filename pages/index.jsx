import React from "react";
import {
  Container,
  ImageContainer,
  MainFlex,
  Form,
  Header,
  GoogleButton,
} from "../styles/index";

import { IconHeader } from "../Assets/icon_header"

function Home() {
  return (
    <Container>
      <MainFlex>
        <Header> 
          <IconHeader />
           Welcome
        </Header>
        <Form>
          <label>Username</label>
          <input></input>
          <label>Password</label>
          <input></input>
          <button></button>
          <button></button>
        </Form>
        <hr/>
        <GoogleButton>
        </GoogleButton>
      </MainFlex>

      <ImageContainer>
        <p></p>
      </ImageContainer>
    </Container>
  );
}

export default Home;
