import React, { useState } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function HeartButton() {
  const [isLiked, setIsLiked] = useState(false);
// alternate staes between fav and default: Using Flat icons
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <TouchableOpacity onPress={toggleLike} style={styles.container}>
    {/* Toggle between default and liked states */}
    <Image
        source={{
          uri: isLiked
            ? 'https://www.flaticon.com/free-icon-font/heart_3916579?related_id=3916579'
            : 'https://www.flaticon.com/free-icon-font/heart_3916580?related_id=3916580',
        }}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});