import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import LikeButton from "./LikeButton";

export default function MenuCard({ image, name, ingredients, price }) {
  return (
    <View style={styles.container}>
    {/* Take iin props to make it dynamic */}
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.ingredients}>{ingredients}</Text>
        {/* Price is in SA Rands */}
        <Text style={styles.price}>R {price}</Text>
      </View>
      <View style={styles.heartIconContainer}>
        <LikeButton/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#3d3d3d",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginRight: 16,
    borderRadius: 100,
    backgroundColor: "#ffe284",
  },
  content: {
    // flex: 1,  //this makes a weird view on the mobile device
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "left",
    wordWrap: "break-word",

  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ingredients: {
    fontSize: 10,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    botton: -90,
  },
  heartIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#ffe284",
  },
});