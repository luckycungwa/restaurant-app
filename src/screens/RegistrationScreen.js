import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Pressable } from "react-native";

import { useForm, Controller } from "react-hook-form"; //the official form velidation library (alt: formik || yup)
import { useDispatch } from "react-redux";              //import useDispatch
import {registerUser} from "../store/actions";          //import that registerUser from actions


export default function RegistrationScreen() {
  const { control, handleSubmit, formState } = useForm();
  
  const dispatch = useDispatch();           //get dispatch function

  const onSubmit = (data) => {
    // Register User (store their data) || check if user already exist
    dispatch(registerUser(data));
    console.log("Registration successful:", data);

    // console.log(data);      //log form data after submission
  };

  return (
    <View style={styles.container}>
      <Text>Registration Screen</Text>
      <View style={styles.formContainer}>
        {/* Name Field */}
        <Controller
          style={styles.TxtField}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <TextInput
                style={styles.TxtInput}
                placeholder="Name"
                onChangeText={field.onChange}
                value={field.value}
              />
              {fieldState.invalid && <Text style={styles.warningTxt}>Name is required.</Text>}
            </>
          )}
          name="name"
          rules={{ required: true }}
        />

        {/* Surname Field */}
        <Controller
          style={styles.TxtField}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <TextInput
                style={styles.TxtInput}
                placeholder="Surname"
                onChangeText={field.onChange}
                value={field.value}
              />
              {fieldState.invalid && <Text style={styles.warningTxt}>Surname is required.</Text>}
            </>
          )}
          name="surname"
          rules={{ required: true }}
        />

        {/* Email Field */}
        <Controller
          style={styles.TxtField}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <TextInput
                style={styles.TxtInput}
                placeholder="Email"
                onChangeText={field.onChange}
                value={field.value}
              />
              {fieldState.invalid && <Text style={styles.warningTxt}>Email is required.</Text>}
            </>
          )}
          name="email"
          rules={{ required: true }}
        />

        {/* Password Field */}
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
              {fieldState.invalid && <Text style={styles.warningTxt}>Password is required.</Text>}
            </>
          )}
          name="password"
          rules={{ required: true }}
        />

        {/* Cell Number Field */}
        <Controller
          style={styles.TxtField}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <TextInput
                style={styles.TxtInput}
                placeholder="Cell Number"
                onChangeText={field.onChange}
                value={field.value}
              />

              {fieldState.invalid && <Text style={styles.warningTxt}>Cell Number is required.</Text>}
            </>
          )}
          name="cellNumber"
          rules={{ required: true }}
        />

        <Button style={styles.Button} title="Register" onPress={handleSubmit(onSubmit)} />
        <Text>click here to login</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
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
});
