import React, {useContext} from "react"; 
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Background from "../components/Background";
import Button from "../components/Button";

export default function StartScreen({ navigation }) {
  return (
    <Background>

      <Header>Welcome!</Header>
      <Paragraph style={{fontSize: 16, fontWeight: "bold", marginBottom: 5}}>
        በአዲስ አበባ ከተማ አስተዳደር 
      </Paragraph> 
      <Paragraph>
        የምርታማነት ማሻሻያና ልህቀት ማዕከል 
      </Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate("Login")}>
        ይግቡ
      </Button>
    </Background>
  );
}
