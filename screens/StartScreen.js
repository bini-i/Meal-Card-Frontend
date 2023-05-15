import React, {useContext} from "react"; 
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Background from "../components/Background";
import Button from "../components/Button";
import { StyleSheet, Image } from "react-native"

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Image
        style={styles.logo}
        source={require("../assets/logo.jpg")}
      />
      <Header>Welcome!</Header>
      <Paragraph>
        በአዲስ አበባ ከተማ አስተዳደር 
      </Paragraph> 
      <Paragraph style={{fontSize: 16, fontWeight: "bold", marginBottom: 5}}>
        የምርታማነት ማሻሻያና ልህቀት ማዕከል 
      </Paragraph>
      <Paragraph>
        የካፍቴርያ ኩፖን መቀበያ 
      </Paragraph> 
      <Button mode="contained" onPress={() => navigation.navigate("Login")}>
        ይግቡ
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 125,
    marginBottom: 30
  },
});