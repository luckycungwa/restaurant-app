import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/actions";

export default function LoginScreen() {
  const { control, handleSubmit, formState } = useForm();
  const navigation = useNavigation();

  // const dispatch = useDispatch();
  const users = useSelector((state) => state.users.user);

  const onSubmit = (data) => {
    console.log("Used Credentials:", data);
    // console.log("Email: ", isEmailMatch);
    // console.log("Password: ", isPasswordMatch);
    handleLogin(data);
  };

  const handleLogin = (data) => {
    const isEmailMatch = users.some((user) => user.email === data.username);
    const isCellMatch = users.some((user) => user.cellNumber === data.username);
    const isPasswordMatch = users.some(
      (user) => user.password === data.password
    );

    if ((isCellMatch || isEmailMatch) && isPasswordMatch) {
      console.log("Logged in successfully!");
      //Navigate to the BrowseScreen
      navigation.navigate("BrowseScreen");
    } else {
      Alert.alert("Incorrect Credentials.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <View style={styles.formContainer}>
        <Controller
          style={styles.TxtField}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <TextInput
                style={styles.TxtInput}
                placeholder="Cell OR email"
                onChangeText={field.onChange}
                value={field.value}
              />
              {fieldState.invalid && (
                <Text style={styles.warningTxt}>
                  This field cannot be empty
                </Text>
              )}
            </>
          )}
          name="username"
          rules={{ required: true }}
        />

        <Controller
          style={styles.TxtField}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <TextInput
                style={styles.TxtInput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={field.onChange}
                value={field.value}
              />
              {fieldState.invalid && (
                <Text style={styles.warningTxt}>Password is required.</Text>
              )}
            </>
          )}
          name="password"
          rules={{ required: true }}
        />

        <Button
          style={styles.Button}
          title="Log in"
          onPress={handleSubmit(onSubmit)}
        />
        <Pressable
          style={styles.link}
          onPress={() => navigation.navigate("BrowseScreen")}
        >
          <Text>Register here</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
  },
  formContainer: {
    width: "80%",
    height: "auto",
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 12,
    borderWidth: 2,
  },
  TxtField: {
    width: 320,
    height: "5%",
    borderRadius: 2.5,
    borderWidth: 2,
    backgroundColor: "#3d3d3d",
    borderStyle: "solid",
    borderWidth: 2,
  },
  TxtInput: {
    width: 320,
    height: 17,
    opacity: 0.5,
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 14,
    letterSpacing: 1,
    color: "#000000",
    marginVertical: 12,
  },
  Button: {
    height: 40,
    width: 200,
    maxWidth: 260,
    maxHeight: 60,
    borderRadius: 50,
    backgroundColor: "#FFC42C",
    borderStyle: "solid",
    borderWidth: 2,
    marginVertical: 12,
  },
  warningTxt: {
    color: "#ff5050ff",
    fontSize: 10,
  },
  link: {
    marginTop: 8,
    color: "#e9d928",
    textDecorationLine: "none",
  },
  
});
