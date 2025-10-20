import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "../navigation/stack_navigation";
import LockOverlayView from "../screens/LockOverlay/LockOverlay_view";
import useAutoLock from "../hooks/useAutoLock";
import { setLocked } from "../store/slices/lockSlice";

export default function MainApp() {
  const dispatch = useDispatch();

  useAutoLock(() => {
    dispatch(setLocked(true));
  }, 1000); 

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
      <LockOverlayView />
    </View>
  );
}
