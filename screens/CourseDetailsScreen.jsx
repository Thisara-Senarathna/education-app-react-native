import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const CourseDetailsScreen = ({ route }) => {
  const { course } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: course.image }} style={styles.image} />
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.category}>{course.category}</Text>
      <Text style={styles.price}>{course.sale_price_usd }</Text>
      <Text style={styles.description}>{course.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  category: {
    fontSize: 18,
    color: '#555',
  },
  price: {
    fontSize: 20,
    color: '#007BFF',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default CourseDetailsScreen;
