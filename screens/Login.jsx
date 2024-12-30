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

  const validateFields = () => {

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();


    if (!trimmedUsername || !trimmedPassword) {
      Alert.alert("Validation Error", "Both fields are required!");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(username)) {
          Alert.alert("Validation Error", "Username should not contain numbers or special characters!");
          return;
        }

    if (trimmedPassword.length < 6) {
      Alert.alert(
        "Validation Error",
        "Password must be at least 6 characters long."
      );
      return false;
    }

    return true;
  };

 

  const handleLogin = () => {
    if (validateFields()) {
      navigation.navigate("home", { username });
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
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)", 
  },
  helloContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  helloText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: "#340aa8", 
  },
  loginpagecontainer: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", 
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
