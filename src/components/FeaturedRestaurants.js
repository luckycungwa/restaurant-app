import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FeaturedRestaurants({ restaurant }) {
  return (
    <View style={styles.card}>
      <Text style={styles.restaurantName}>{restaurant.name}</Text>
      {/* Render additional details of the featured restaurant */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
    width: 200,
    height: 200,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});