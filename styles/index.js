import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 100vh;
`;

const MainFlex = styled.div`
  background-color: blue;
  flex: 1.4;
  display: flex;
  flex-direction: column;
  justify-content: center;
	align-content:center;
`;

const Header = styled.header`
	background-color: purple;
	flex: 1.5;
`;

const Form = styled.form`
	background-color: green;
	flex: 4;
`;

const GoogleButton = styled.button`
	background-color: black;
	flex: 2.4;
`;

const ImageContainer = styled.div`
  background-color: red;
  flex: 1;
`;

export { Container, ImageContainer, MainFlex, Form, Header, GoogleButton };
