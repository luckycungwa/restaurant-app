import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import { createStore } from "react-redux";
import { Provider } from "react-redux"; 
import userReducer from "./src/store/reducers/userReducer";
import store from "./src/store/store";
import LoginScreen from "./src/screens/LoginScreen";
import Navigation from "./src/components/Navigation";



export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Navigation/>
        {/* <RegistrationScreen /> */}
        <LoginScreen/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
