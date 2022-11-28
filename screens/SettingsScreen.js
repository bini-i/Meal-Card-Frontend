import React, { useContext } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function SettingsScreen() {
    const {user} = useContext(AuthContext)
    return (
      <View style={styles.container}>
         <View style={styles.heroContainer}>
            <View style={{ flex: 1 }}>
                <Text style={styles.heroTitle}>{user ? user.username : null}</Text>
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
  heroContainer: {
    marginTop: 10,
    marginBottom: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    flexDirection: 'row',
  },
  heroTitle: {
    fontFamily: 'sans-serif',
    color: 'black',
    fontSize: 24,
  },
  heroSubtitle: {
    fontFamily: 'sans-serif',
    color: '#999',
    fontSize: 14,
  }
});
