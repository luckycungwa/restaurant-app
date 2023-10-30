import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import RestaurantCard from "../components/RestaurantCard";
// db stuff
import firebase from "firebase/app";
import "firebase/database";

export default function BrowseScreen() {
  const [restaurants, setRestaurants] = useState([]);
  // idocator for fetching data || loading component
  const [loading, setLoading] = useState(true);   //check 

  useEffect(() => {
    // Fetch all restaurant data from the database
    const restaurantRef = firebase.database().ref("Restaurants");
    restaurantRef.once('value')
      .then((snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Convert data object to an array for featured etc.
          const restaurantArray = Object.values(data);
          setRestaurants(restaurantArray);
        }
        console.log("Fetchin data...");
        setLoading(false);   // check if data fetching is complete
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);      //still loding
      });
  }, []);

  // handle loading and error states
  if (loading) {
    console.log("Loading...");
    return <ActivityIndicator size="large" color="#000" style={styles.loadingIndicator} />;
  }

  return (
    <View style={styles.container}>
      {/* List All Restaurants to browse through*/}
      <ScrollView>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} id={restaurant.id} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",

    backgroundColor: "#fff",
  },
  categorySection: {
    backgroundColor: "#daff46",
    paddingVertical: 8,
    // height: 52,
  },
  featuredSection: {
    backgroundColor: "#ff7474",
  },
  loadingIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a2a2a2",
  },
});
