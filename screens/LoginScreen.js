import React, { useState, useEffect, useContext } from "react";
import Background from "../components/Background";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { TextInput as Input } from "react-native-paper";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { touchProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const {login, isLoading, setIsLoading} = useContext(AuthContext)

  const handleEmailInput = (username) => {
    setUsername(username);
  };

  const handlePasswordInput = (password) => {
    setPassword(password);
  };

  const handleLogin = async () => {
    setErrorText("");
    if (username === "" || password === "") {
      setErrorText("username and password are mandatory.");
      return;
    }
    setIsLoading(true)
    
    try {
      console.log("fetching")
      fetch("http://127.0.0.1:3000/login", {
          method: "POST",
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username,
              password
          })
      })
      .then((response) => {
        console.log(response)
        if(!response.ok){
          throw new Error("Please try again")
        }
        return response.json()
      })
      .then(data => {
        setIsLoading(false)
        login(data)
      }) 
      .catch((error) => {
        setIsLoading(false)
        setErrorText(error.message)
      })
    } catch (error) {
      setIsLoading(false)
      setErrorText("Please try again");
    }
  };

  return (
    <Background>
      {
        isLoading && (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size={'large'} />
          </View>
        ) 
      }

      {!!errorText && (
        <View style={styles.error}>
          <Text>{errorText}</Text>
        </View>
      )}

      <TextInput
        onChangeText={handleEmailInput}
        value={username}
        label="መለያ ስም"
        autoCapitalize="none"
      />

      <TextInput
        onChangeText={handlePasswordInput}
        value={password}
        label="የሚስጥር ቁጥር"
        right={<Input.Icon name="eye" />}
        secureTextEntry
        autoCapitalize="none"
      />
      
      <Button mode="contained" onPress={handleLogin}>
        ይግቡ
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  error: {
    marginTop: 10,
    padding: 10,
    color: "#fff",
    backgroundColor: "#D54826FF",
  },
});
