import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import { createStore } from "react-redux";
import { Provider } from "react-redux"; 
import userReducer from "./src/store/reducers/userReducer";
import store from "./src/store/store";        // get store
import LoginScreen from "./src/screens/LoginScreen";
import Navigation from "./src/components/Navigation";
import BrowseScreen from "./src/screens/BrowseScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import MenuScreen from "./src/screens/MenuScreen";



export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <Navigation/> */}
        {/* <RegistrationScreen /> */}      
        {/* <LoginScreen/> */}
        <BrowseScreen/>
        {/* <LoadingScreen/> */}
        {/* <MenuScreen/> */}
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
    
    paddingTop: 48,
    paddingHorizontal: 8,
  },
});
