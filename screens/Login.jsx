import {
  View,
  Text,
  TextInput,
  Alert,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      // Navigate to the Home screen and pass the username
      navigation.navigate("home", { username });
    } else {
      Alert.alert(
        "Validation Error",
        "Please enter both username and password"
      );
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bgg.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} /> 
        <View style={styles.helloContainer}>
          <Text style={styles.helloText}>Hello</Text>
        </View>
        <View style={styles.loginpagecontainer}>
          <View>
            <Text style={styles.title}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="blue"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="blue"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Pressable style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("signup")}>
              <Text style={styles.signupText}>
                Don't have an account? Register
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Ensures the image scales to cover the screen
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Optional dimming overlay
  },
  helloContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  helloText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: "#340aa8", // Contrasting color for visibility
  },
  loginpagecontainer: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly transparent background
    borderRadius: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    color: "#000000",
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#340aa8",
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#ffffff",
    fontSize: 16,
    height: 50,
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#340aa8",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupText: { color: "blue", marginTop: 10, textAlign: "center" },
});
