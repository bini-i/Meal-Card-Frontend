import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { TextInput as Input } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

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
      }).catch(function(){
        console.log("Network not responsive")
        setErrorText("Network not responsive");
      })
    } catch (error) {
      console.log(error)
      setErrorText("Please try again");
    }
  };

  return (
    <Background>
      {!!errorText && (
        <View style={styles.error}>
          <Text>{errorText}</Text>
        </View>
      )}
      <TextInput
        onChangeText={handleEmailInput}
        value={username}
        label="username"
        autoCapitalize="none"
      />
      <TextInput
        onChangeText={handlePasswordInput}
        value={password}
        label="Password"
        right={<Input.Icon name="eye" />}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button mode="contained" onPress={handleLogin}>
        Login
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
