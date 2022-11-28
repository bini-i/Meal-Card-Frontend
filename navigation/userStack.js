import React, { useState, useEffect, useContext } from "react"; 
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from "../core/theme";
import HomeStack from "./homeStack"
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();
const MainNavigator = createBottomTabNavigator();

export default function UserStack() {
  const {logout} = useContext(AuthContext)
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name == "Settings") {
              iconName = focused ? "ios-list-sharp" : "ios-list";
            } 
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: "gray",
        })}
      >
        <MainNavigator.Screen name="Home" component={HomeStack} options={{title: 'PICE'}} />
        <MainNavigator.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: 15, padding: 10, backgroundColor: theme.colors.primary
                }}
                onPress={() => logout()}
              >
                <Text>Logout</Text>
              </TouchableOpacity>
            )
          }}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.surface,
    flex: 1,
    width: "100%",
  },
});
