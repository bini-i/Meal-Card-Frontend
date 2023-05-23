import React, { useContext } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { theme } from "../core/theme";
import { Divider, List } from 'react-native-paper';
import Paragraph from "../components/Paragraph";

export default function SettingsScreen() {
    const {user} = useContext(AuthContext)
    return (
      <View style={styles.container}>
         {/* <View style={styles.heroContainer}>
            <View style={{ flex: 1 }}>
                <Text style={styles.heroTitle}>{user ? user.username : null}</Text>
            </View>
        </View> */}
        <Paragraph 
          style={{
            fontSize: 15, 
            marginTop: 8, 
            color: theme.colors.primary, 
            borderLeftWidth: 2, 
            borderColor: theme.colors.primary,
            paddingLeft: 8,
            marginBottom: 8,
            alignSelf: "center"
          }}
        >
            የዕለት መስተንግዶዎች መረጃ
        </Paragraph>
        <ScrollView>
          {/* {[...Array(5).keys()].forEach(i=>{

            return( */}
              <View 
                key={1}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "white", 
                  padding: 6, 
                  marginBottom: 9,
                  borderRadius: 7  
                }}
              >
                <List.Icon  style={{color: theme.colors.primary}} icon={require('../assets/serve.png')} />
                <View style={{flex: 1, flexDirection: "row" }}>
                  <Text style={{fontWeight: "bold", color: theme.colors.primary}}>{ 2 + " ኩፖን" }</Text>
                  <View style={{marginLeft: "auto", paddingHorizontal: 15 }}>
                    <Text style={{color: "gray"}}>"date"</Text>
                    <Text style={{color: "gray"}}>"time"</Text>
                  </View>
                </View>
              </View>
            {/* )
          })} */}
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    flex: 1,
    padding: 17
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
