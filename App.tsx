import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyStack from "./navigation/stack_navigation";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      <Toast />
    </NavigationContainer>
  );
}
