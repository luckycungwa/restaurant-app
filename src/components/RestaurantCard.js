// was renamed from MainCard
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import LikeButton from './LikeButton';

export default function RestaurantCard({ image, name, foodType, location, closingTime, rating }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.foodType}>{foodType}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.closingTime}>{closingTime}</Text>
        <Text style={styles.rating}>{rating}</Text>
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
