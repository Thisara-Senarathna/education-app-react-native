import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../screens/HomePage";
import CardScreen from "../screens/CardScreen";
import SignUpScreen from "../screens/Register";
import Login from "../screens/Login";
import { ClickProvider } from "../context/ClickContext";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // Wrap the navigator with the HeartCountProvider
    <ClickProvider>
      
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Login}
          name="login"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={CardScreen}
          name="card"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={SignUpScreen}
          name="signup"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={CardScreen} />
      </Stack.Navigator>
      
    </ClickProvider>
  );
};

export default App;
