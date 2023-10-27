import React from "react";
import { View, StyleSheet,FlatList } from "react-native";
// import Card from "./Card";
import MenuCard from "../components/MenuCard";

export default function MenuScreen() {
  // My pseudo json db lol
  const menuItems = [
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      name: "Menu Item 1",
      ingredients: "Potato mash  |  2 beef patty  |  2 Dry Slices  |  Wedges",
      price: "199.99",
    },
    {
      id: 2,
      image: "https://example.com/image2.jpg",
      name: "Menu Item 2",
      ingredients: "Potato mash  |  4 beef patty  |  4 Dry Slices  |  Wedges",
      price: "299.99",
    },
    {
      id: 3,
      image: "https://example.com/image2.jpg",
      name: "Menu Item 3",
      ingredients: "Potato mash  |  4 beef patty  |  4 Dry Slices  |  Wedges",
      price: "169.99",
    },
    {
      id: 4,
      image: "https://example.com/image2.jpg",
      name: "Menu Item 4",
      ingredients: "Potato mash  |  4 beef patty  |  4 Dry Slices  |  Wedges",
      price: "499.99",
    },
  ];

  return (
    <View style={styles.container}>
    {/* Flood with card from db */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}     //assign uniq key to each item
        renderItem={({ item }) => (
          <MenuCard
            image={item.image}
            name={item.name}
            ingredients={item.ingredients}
            price={item.price}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  listContent: {
    paddingBottom: 16,
  },
});
