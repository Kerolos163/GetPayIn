import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "../navigation/stack_navigation";
import LockOverlayView from "../screens/LockOverlay/LockOverlay_view";
import useAutoLock from "../hooks/useAutoLock";
import { setLocked } from "../store/slices/lockSlice";
import { AutoLockContext } from "../context/AutoLockContext";

interface RootState {
  lock: {
    locked: boolean;
  };
}

export default function MainApp() {
  const dispatch = useDispatch();
  const locked = useSelector((state: RootState) => state.lock.locked);
  const resetAutoLock = useAutoLock(() => {
    dispatch(setLocked(true));
  }, 30000); // 30 seconds

  return (
    <AutoLockContext.Provider value={{ resetAutoLock }}>
      <View style={{ flex: 1 }}>
        {!locked && (
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        )}
        {locked && <LockOverlayView />}
      </View>
    </AutoLockContext.Provider>
  );
}
