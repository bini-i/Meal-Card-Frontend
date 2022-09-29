import React, {useContext} from "react"; 
import {View, Text} from "react-native"
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Background from "../components/Background";
import Button from "../components/Button";

export default function ServeScreen({ route, navigation }) {
  const {firstName, fatherName, remaining, message} = route.params
  return (
    <Background>
          <View
            style={{
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              right: 10,
              top: 10,
            }}>
            <View
              style={{
                position: 'absolute',
                width: 120,
                height: 45,
                backgroundColor: 'green',
                transform: [{rotate: '45deg'}],
              }}
            />
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              ✓
            </Text>
          </View>
        <Header style={{fontSize: 30, fontWeight: "bold", color: "green", marginBottom: 5}}>ተስተናግዷል</Header>
        <Paragraph style={{fontSize: 25, marginBottom: 8}}>{firstName + " " + fatherName}</Paragraph>
        <Paragraph style={{fontSize: 25, marginBottom: 30}}>{remaining + " ኩፖን ይቀርዎታል"}</Paragraph>
        <Button mode="outlined" onPress={()=>navigation.navigate("HomeScreen")}>ይመለሱ</Button>
    </Background>
  );
}
