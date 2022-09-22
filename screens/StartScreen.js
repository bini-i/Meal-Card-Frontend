import React from "react"; 
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Background from "../components/Background";
import Button from "../components/Button";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header>Welcome to x</Header>
      <Paragraph>
        The easiest way to manage x services
      </Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate("Login")}>
        Login
      </Button>
    </Background>
  );
}
