import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ClickContext } from "../context/ClickContext";

const FloatingButton = () => {
  const { clickCount } = useContext(ClickContext);

  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{clickCount}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#340aa8",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FloatingButton;
