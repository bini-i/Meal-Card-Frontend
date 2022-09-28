import React, {useContext} from "react"; 
import {Text} from "react-native"
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Background from "../components/Background";
import Button from "../components/Button";

export default function ServeScreen({ navigation }) {
  return (
    <Background>
        <Text>Served</Text>
    </Background>
  );
}
