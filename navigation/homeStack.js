import React, { useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ServeScreen from "../screens/ServeScreen"

const HomeTab = createNativeStackNavigator();

export default function HomeStack({ navigation, route }) {
    return (
      <HomeTab.Navigator>
        <HomeTab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <HomeTab.Screen
          name="ServeScreen"
          component={ServeScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
      </HomeTab.Navigator>
    );
}
