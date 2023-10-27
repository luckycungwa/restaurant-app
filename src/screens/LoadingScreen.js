import { View, Text, StyleSheet, Animated, Easing, Image } from "react-native";
import React, {useEffect, useState} from "react"
import Logo from "../../assets/favicon.png";        //get logo


export default function LoadingScreen() {
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
      animate();
    }, []);
//   Animate the Loading indicator text or logo
    const animate = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.loadingContainer}>
          <Animated.Text
            style={[
              styles.loadingText,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            Looking for restaurants...
          </Animated.Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    logoContainer: {
      marginTop: 100,
    },
    logo: {
      width: 100,
      height: 100,
      resizeMode: "contain",
      justifyContent: "center",
      alignItems: "center",
    },
    loadingContainer: {
      marginTop: 50,
    },
    loadingText: {
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  