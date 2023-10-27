import React from "react";
import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import CategoryBtn from "../components/CategoryBtn";
import FeaturedRestaurants from "../components/FeaturedRestaurants";
import RestaurantCard from "../components/RestaurantCard";

export default function BrowseScreen({ featuredRestaurants, allRestaurants }) {
  const foodCategories = [
    "African Cuisine",
    "Street food",
    "Italian",
    "Vegetarian/Vegan",
    "Seafood",
    "Fast Food",
    "Fine Dining",
    "BBQ/Grill",
    "Cafés & Coffee Shops",
    "Food Trucks",
  ];

//array of restaurants
  const allRestaurantsData= [
    {
      id: 1,
      name: "Tasty Bites",
      location: "123 Main Street, Johannesburg",
      distance: "1.5 km",
      rating: 4.7,
    },
    {
      id: 2,
      name: "Fusion Delights",
      location: "456 Park Avenue, Cape Town",
      distance: "3.2 km",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Spice Haven",
      location: "789 Ocean Road, Durban",
      distance: "2.0 km",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Sushi Supreme",
      location: "101 Riverfront Drive, Pretoria",
      distance: "4.5 km",
      rating: 4.5,
    },
    {
      id: 5,
      name: "Mediterranean Delights",
      location: "246 Sun Street, Port Elizabeth",
      distance: "5.1 km",
      rating: 4.6,
    },
  ];

  // featured restauranst array

const featuredRestaurantsData = [
  {
    id: 1,
    name: "Tasty Bites",
    location: "123 Main Street, Johannesburg",
    distance: "1.5 km",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Fusion Delights",
    location: "456 Park Avenue, Cape Town",
    distance: "3.2 km",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Spice Haven",
    location: "789 Ocean Road, Durban",
    distance: "2.0 km",
    rating: 4.8,
  },
];


  // Rendering the categories
  const renderCategoryBtn = ({ item }) => {
    return <CategoryBtn category={item} />;
  };
  // Rendering featured or top restaurants
  const renderFeaturedRestaurant = ({ item }) => {
    return <FeaturedRestaurants restaurant={item} />;
  };
  // Render the rest of the available restaurants
  const renderRestaurant = ({ item }) => {
    return (
      <RestaurantCard
      image={item.image}
      name={item.name}
      // foodType={item.foodType}
      location={item.location}
      // closingTime={item.closingTime}
      rating={item.rating}
    />
    )
  };

  return (
    <View style={styles.container}>
      {/* Food Categories */}
      <View>
        <FlatList
          style={styles.categorySection}
          data={foodCategories}
          renderItem={renderCategoryBtn}
          keyExtractor={(item) => item}
          horizontal
        />
      </View>

      {/* Featured Restaurants */}
      <View>
        <ScrollView horizontal>
          <FlatList
            style={styles.featuredSection}
            data={featuredRestaurants}
            renderItem={renderFeaturedRestaurant}
            keyExtractor={(item) => item.id.toString()}
            horizontal
          />
        </ScrollView>
      </View>

      {/* All Restaurants */}
      <View>
        <FlatList
          data={allRestaurants}
          renderItem={renderRestaurant}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
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
});
