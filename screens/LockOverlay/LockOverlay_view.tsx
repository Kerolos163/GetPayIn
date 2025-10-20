import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./LockOverlay_style";
import { useSelector, useDispatch } from "react-redux";
import { setLocked } from "../../store/slices/lockSlice";
import ReactNativeBiometrics from "react-native-biometrics";
import Toast from "react-native-toast-message";

const LockOverlayView = () => {
  const locked = useSelector((state: any) => state.lock.locked);
  const dispatch = useDispatch();

  if (!locked) return null;
  const handleUnlock = async () => {
    try {
      const rnBiometrics = new ReactNativeBiometrics();
      const { available } = await rnBiometrics.isSensorAvailable();
      if (!available) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Biometric authentication is not available",
        });
        dispatch(setLocked(false));
        return;
      }
      const { success } = await rnBiometrics.simplePrompt({
        promptMessage: "Unlock",
      });
      if (success) {
        dispatch(setLocked(false));
      } else {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Biometric authentication cancelled",
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Biometric authentication failed",
      });
      dispatch(setLocked(false));
    }
  };
  return (
    <View style={styles.body}>
      <Image
        source={require("../../assets/lock.png")}
        style={{ width: "50%", height: "50%", resizeMode: "contain" }}
      />
      <TouchableOpacity
        onPress={handleUnlock}
        style={{
          backgroundColor: "#00bcd4",
          paddingHorizontal: 25,
          paddingVertical: 10,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Unlock</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LockOverlayView;
