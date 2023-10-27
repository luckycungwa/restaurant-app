import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CategoryBtn({ category }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 36,
    marginRight: 8,
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 6,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});