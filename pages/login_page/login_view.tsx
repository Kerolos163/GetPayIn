import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import style from "./login_style";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={style.body} behavior="padding">
      <View style={style.container}>
        <Text style={style.text}>welcome back</Text>
        <TextInput
          style={style.input}
          selectionColor="#009c9475"
          placeholder="Email"
        ></TextInput>
        <TextInput style={style.input} placeholder="Password"></TextInput>
        <Text style={style.forgetPassword}>Forget password</Text>
        <TouchableOpacity
          style={style.loginButton}
          onPress={() => console.warn("Login")}
        >
          <Text style={style.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: "center", marginTop: 10 }}>
        I don't have an account?{" "}
        <Text
          style={style.signUp}
          onPress={() => {
            console.log("Sign up");
          }}
        >
          Sign up
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
