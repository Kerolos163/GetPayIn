import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import style from "./login_style";
import { Feather } from "@expo/vector-icons";

const LoginScreen = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <View style={style.body}>
      <KeyboardAvoidingView style={style.container} behavior="padding">
        <Text style={style.text}>welcome back</Text>
        <TextInput
          style={style.input}
          selectionColor="#009c9475"
          placeholder="Email"
        ></TextInput>
        <View style={style.password}>
          <TextInput
            style={[style.input, { width: "100%" }]}
            placeholder="Password"
            secureTextEntry={hidden}
          ></TextInput>

          <TouchableOpacity
            style={{ position: "absolute", right: 18, top: 32 }}
            onPress={() => {
              setHidden(!hidden);
            }}
          >
            <Feather
              name={hidden ? "eye-off" : "eye"}
              size={20}
              color="#009c94"
            />
          </TouchableOpacity>
        </View>
        <Text style={style.forgetPassword}>Forget password</Text>
        <TouchableOpacity
          style={style.loginButton}
          onPress={() => console.warn("Login")}
        >
          <Text style={style.loginText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <Text
        style={{
          textAlign: "center",
          backgroundColor: "white",
          paddingBottom: 30,
        }}
      >
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
    </View>
  );
};

export default LoginScreen;
