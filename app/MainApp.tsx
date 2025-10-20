import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "../navigation/stack_navigation";
import LockOverlayView from "../screens/LockOverlay/LockOverlay_view";
import useAutoLock from "../hooks/useAutoLock";
import { setLocked } from "../store/slices/lockSlice";

export default function MainApp() {
  const dispatch = useDispatch();
  const locked = useSelector((state: any) => state.lock.locked);

  useAutoLock(() => {
    dispatch(setLocked(true));
  });

  return (
    <View style={{ flex: 1 }}>
      {!locked && (
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      )}
      <LockOverlayView />
    </View>
  );
}
