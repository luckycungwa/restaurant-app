// was renamed from MainCard
import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import LikeButton from "./LikeButton";
import { getDatabase, ref, onValue } from "firebase/database";

export default function RestaurantCard({ id }) {
  const [restaurantData, setRestaurantData] = useState(null);

  
  useEffect(() => {
    const db = getDatabase(firebase);
    const restaurantRef = ref(db, "Restaurants/" + id);

    onValue(restaurantRef, (snapshot) => {
      const data = snapshot.val();
      setRestaurantData(data);
    });
  }, [id]);

  if (!restaurantData) {
    console.log("Failed to fetch data");
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurantData.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{restaurantData.name}</Text>
        <Text style={styles.foodType}>{restaurantData.category}</Text>
        <Text style={styles.location}>{restaurantData.location}</Text>
        {/* <Text style={styles.closingTime}>{restaurantData.description}</Text> */}
        {/* <Text style={styles.closingTime}>{restaurantData.closingTime}</Text> */}
        <Text style={styles.rating}>{restaurantData.rating}</Text>
      </View>
      <View style={styles.likeBtnContainer}>
        <LikeButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#0e0e0e',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: 16,
    },
    image: {
      width: '100%',
      height: 200,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    content: {
      padding: 16,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    foodType: {
      fontSize: 16,
      marginBottom: 8,
    },
    location: {
      fontSize: 14,
      marginBottom: 8,
    },
    closingTime: {
      fontSize: 14,
      marginBottom: 8,
    },
    rating: {
      fontSize: 14,
      marginBottom: 8,
    },
    likeBtnContainer: {
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
  });
