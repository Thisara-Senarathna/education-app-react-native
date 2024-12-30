import React, { useState, useEffect,useContext } from 'react';
import { View, FlatList, StyleSheet,Image,Text } from 'react-native';
import CategoryBar from '../components/CategoryBar';
import CourseCard from '../components/CourseCard';
import { ClickContext } from "../context/ClickContext";
import FloatingButton from "../components/FloatingButton";
import MainImage from "../assets/images/education.jpg"

const HomeScreen = ({ navigation,route}) => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setClickCount } = useContext(ClickContext);
  
  const username = route.params?.username || 'Guest';

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://paid-udemy-course-for-free.p.rapidapi.com/?page=0",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "5234c3decamsh33f498a681d19d8p1125c3jsn4230e6b9d044",
            "X-RapidAPI-Host": "paid-udemy-course-for-free.p.rapidapi.com",
          },
        }
      );
      
      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }

      const data = await response.json();
      const formattedCourses = data.map((course) => ({
        name: course.title,
        image: course.pic,
        category: course.category || "Uncategorized",
        description: course.desc_text || "No description available",
        sale_price_usd: course.org_price || "0.00",
      }));

      setCourses(formattedCourses);

      const uniqueCategories = [
        "All",
        ...new Set(formattedCourses.map((course) => course.category)),
      ];
      setCategories(uniqueCategories);

      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

    const handleCardClick = () => {
      setClickCount((prev) => prev + 1);
    };

  return (
    <View style={styles.container}>

     
      <View style={styles.userSection}>
        <Text style={styles.greetingText}>Welcome, {username}!</Text>
      </View>

      <View style={styles.mainSection}>
        <Image
          source={MainImage}
          style={styles.mainImage}
        />
        <Text style={styles.mainTitle}>Explore Knowledge, Expand Your Horizons</Text>
        <Text style={styles.mainSubtitle}>Discover the best courses to elevate your skills</Text>
      </View>
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <FlatList
        data={filteredCourses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CourseCard
            course={item}
            onPress={() => {
              handleCardClick(); 
              navigation.navigate('courseDetails', { course: item }); 
            }}
            
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
    backgroundColor: '#f8f8f8',
  },
  userSection: {
    backgroundColor: '#340aa8',
    padding: 10,
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  mainSection: {
    alignItems: 'center',
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  mainImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 8,
    textAlign: 'center',
  },
  mainSubtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default HomeScreen;
