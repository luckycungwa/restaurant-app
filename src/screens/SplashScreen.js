import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SplashScreen() {
  return (
    <View>
      <Text>SplashScreen</Text>
      <View>
        <View style={styles.logo}></View>

        <Text style={styles.greetingTxt}>
          Hi, welcome to your one way stop for you tummy.
        </Text>
        <Button style={styles.btn}></Button>
        <Text style={styles.warningTxt}>
          Hi, welcome to your one way stop for you tummy.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "80%",
    height: "auto",
  },
  greetingTxt: {
    width: 360,
    height: 24,
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 14,
    textAlign: "center",
    color: "#FFFFFF",
  },
  warningTxt: {
    width: 131,
    height: 10,
    fontFamily: "Montserrat",
    fontSize: 8,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 8,
    textAlign: "center",
  },
});
