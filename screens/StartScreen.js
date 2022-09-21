import React from "react"; 
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Background from "../components/Background";
import Button from "../components/Button";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header>Welcome to Tomato</Header>
      <Paragraph>
        The easiest way to start your online shopping experience
      </Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate("Login")}>
        Login
      </Button>
      <Button mode="outlined" color="tomato" onPress={() => navigation.navigate("SignUp")}>
        Signup
      </Button>
    </Background>
  );
}
