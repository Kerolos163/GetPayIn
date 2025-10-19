import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/store";
import MyStack from "./navigation/stack_navigation";
import Toast from "react-native-toast-message";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <MyStack />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}
