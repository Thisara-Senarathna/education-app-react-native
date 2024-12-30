import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!name.trim()) {
      Alert.alert("Validation Error", "Name is required!");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      Alert.alert("Validation Error", "Name should not contain numbers or special characters!");
      return;
    }
    if (!email.trim()) {
      Alert.alert("Validation Error", "Email is required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Validation Error", "Invalid email format!");
      return;
    }
    if (!password.trim()) {
      Alert.alert("Validation Error", "Password is required!");
      return;
    }
    if (password.length < 6) {
      Alert.alert(
        "Validation Error",
        "Password must be at least 6 characters long!"
      );
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Validation Error", "Passwords do not match!");
      return;
    }

    Alert.alert("Success", "Sign-up successful!");
    navigation.navigate("login");

  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bgg.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Register</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="blue"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="blue"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="blue"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor="blue"
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>
            Already Have an Account?{" "}
            <Text
              style={styles.signinText}
              onPress={() => navigation.navigate("login")}
            >
              Login
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

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
  contentContainer: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.85)", 
    borderRadius: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    color: "#000000",
    fontWeight: "900",
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
  footerText: {
    marginTop: 15,
    fontSize: 14,
    color: "#444",
    textAlign: "center",
  },
  signinText: {
    color: "#3399FF",
    fontWeight: "bold",
  },
});

export default SignUpScreen;
