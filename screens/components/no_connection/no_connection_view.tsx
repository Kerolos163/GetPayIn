import React from "react";
import { View, Image } from "react-native";
import styles from "./no_connection_style";

const NoConnectionView = () => {
  return (
    <View style={styles.body}>
      <Image
        source={require("../../../assets/No connection-bro.png")}
        style={styles.container}
      />
    </View>
  );
};

export default NoConnectionView;
