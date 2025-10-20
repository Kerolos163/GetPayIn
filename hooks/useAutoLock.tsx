import { use, useEffect, useRef } from "react";
import { AppState } from "react-native";

const useAutoLock = (onAutoLock: () => void, autoLockTime: number = 10000) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    //! Check if the timer is already set and clear it
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    //? Set a new timer
    timerRef.current = setTimeout(() => {
      onAutoLock();
      resetTimer();
    }, autoLockTime);
  };

  useEffect(() => {
    //? Listen for app state changes
    const appStateListener = AppState.addEventListener(
      "change",
      (nextAppState) => {
        if (nextAppState == "background") {
          onAutoLock();
        } else if (nextAppState == "active") {
          resetTimer();
        }
      }
    );
    resetTimer(); //! Start the timer when the component mounts

    //? Clean up the timer when the component unmounts
    return () => {
      appStateListener.remove();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
};

export default useAutoLock;
