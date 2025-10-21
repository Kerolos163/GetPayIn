import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MMKV from "../../../utils/MMKV";
import constant from "../../../utils/constant";
import { useNavigation } from "@react-navigation/native";
import styles from "./header_style";

const HeaderView = ({ email }: { email: string | undefined }) => {
  const navigation = useNavigation();

  const logout = () => {
    MMKV.removeItem(constant.token);
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" as never }],
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {email ?? ""}</Text>
      <TouchableOpacity onPress={logout}>
        <View style={styles.btnStyle}>
          <Text style={{ color: "white" }}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderView;
