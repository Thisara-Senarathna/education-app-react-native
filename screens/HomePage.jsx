import React, { useEffect, useState, useContext } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Card from "../components/Card";
import FloatingButton from "../components/FloatingButton";
import { ClickContext } from "../context/ClickContext";

const HomePage = ({ route }) => {
  const { username } = route.params; // Get username from navigation
  const [data, setData] = useState([]);
  const { setClickCount } = useContext(ClickContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // Replace with your API
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => setData(result.slice(0, 10))) // Adjust as needed
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleCardClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome, {username}!</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <Card
            item={{
              title: item.title,
              description: item.body,
              image: "https://via.placeholder.com/150", // Placeholder image
              status: "Active",
            }}
            onCardClick={handleCardClick}
          />
        )}
      />
      <FloatingButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f8", // Subtle background color
    padding: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#340aa8",
    textAlign: "center",
    marginVertical: 15,
  },
  listContainer: {
    paddingBottom: 70, // Space for the floating button
  },
});

export default HomePage;
