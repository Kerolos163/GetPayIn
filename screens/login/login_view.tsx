import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import style from "./login_style";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import constant from "../../utils/constant";
import Toast from "react-native-toast-message";
import MMKV from "../../utils/MMKV";
import { AutoLockContext } from "../../context/AutoLockContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { isAdmin } from "../../store/slices/roleSclice";

const LoginScreen = () => {
  const { resetAutoLock } = useContext(AutoLockContext);
  const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setemailEErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const dispatch = useDispatch();

  const navigation: NavigationProp<any> = useNavigation();

  const handleLogin = useCallback(async () => {
    if (!email) setemailEErrorMessage("Email is required");
    if (!password) setPasswordErrorMessage("Password is required");

    if (!email || !password) {
      setTimeout(() => {
        setemailEErrorMessage("");
        setPasswordErrorMessage("");
      }, 5000);
      return;
    }

    try {
      const response = await axios.post(`${constant.baseUrl}/auth/login`, {
        username: email,
        password,
      });

      MMKV.setString(constant.token, response.data.accessToken);
      if(email === constant.adminRole){
        dispatch(isAdmin());
      }
      navigation.reset({
        index: 0,
        routes: [{ name: "Product" as never, params: { email } as never }],
      });
    } catch (err: any) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: err.response.data.message,
      });
    }
  }, [email, password, navigation]);

  return (
    <View style={style.body}>
      <KeyboardAvoidingView style={style.container} behavior="padding">
        <Text style={style.text}>welcome back</Text>
        <TextInput
          onPress={resetAutoLock}
          style={[
            style.input,
            { borderColor: emailErrorMessage ? "red" : "#009C94" },
          ]}
          selectionColor="#009c9475"
          placeholder="Email"
          value={email}
          onChangeText={(e) => {
            setEmail(e);
          }}
        ></TextInput>
        {emailErrorMessage && (
          <Text style={{ color: "red", textAlign: "left", width: "90%" }}>
            {emailErrorMessage}
          </Text>
        )}
        <View style={style.password}>
          <TextInput
            onPress={resetAutoLock}
            style={[
              style.input,
              {
                width: "100%",
                borderColor: passwordErrorMessage ? "red" : "#009C94",
              },
            ]}
            placeholder="Password"
            secureTextEntry={hidden}
            value={password}
            onChangeText={(e) => {
              setPassword(e);
            }}
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
        {passwordErrorMessage && (
          <Text style={{ color: "red", textAlign: "left", width: "90%" }}>
            {passwordErrorMessage}
          </Text>
        )}
        <Text style={style.forgetPassword}>Forget password</Text>
        <TouchableOpacity style={style.loginButton} onPress={handleLogin}>
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
            console.log("sign up");
          }}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
