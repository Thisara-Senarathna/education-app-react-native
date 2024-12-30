import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

import SignUpScreen from "../screens/Register";
import Login from "../screens/Login";
import { ClickProvider } from "../context/ClickContext";
import CourseDetailsScreen from "../screens/CourseDetailsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <ClickProvider>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Login}
          name="login"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={SignUpScreen}
          name="signup"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="courseDetails"
          component={CourseDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ClickProvider>
  );
};

export default App;
