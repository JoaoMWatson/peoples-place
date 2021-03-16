import React from "react";
import {
  Container,
  ImageContainer,
  MainFlex,
  Form,
  Header,
  GoogleButton,
} from "../styles/index";

function Home() {
  return (
    <Container>
      <MainFlex>
        <Header> 
          <svg width="51" height="67" viewBox="0 0 51 67" fill="none" xmlns="http://www.w3.org/2000/svg%22%3E">
            <path d="M14.2105 57H6V2H35.5579M14.2105 57C14.2105 57 5.17895 45.1081 14.2105 31.7297C23.2421 18.3514 27.3474 41.6396 35.5579 31.7297C43.7684 21.8198 35.5579 2 35.5579 2M14.2105 57H35.5579H45V2H35.5579" stroke="#262B2A" stroke-width="2.5"/>
            <defs>
            <filter id="filter0_d" x="0.75" y="0.75" width="49.5" height="65.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
          </svg>
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
