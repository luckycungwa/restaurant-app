import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Button() {
  return (
    <View>
      <Button style={styles.Button}>
        <Text style={styles.ButtonTxt}>Create Account</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  Button: {
    width: 260,
    height: 60,
    borderRadius: "50%",
    backgroundColor: "#FFC42C",
    // borderStyle: solid,
    borderWidth: 1.5,
    borderColor: "rgba(255, 194, 37, 1.0)",
    borderRadius: "50%",
  },
  ButtonTxt: {
    width: 150,
    height: 24,
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 18,
    textAlign: "center",
    color: "#000000",
  },
});
