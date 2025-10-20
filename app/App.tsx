import { Provider } from "react-redux";
import store from "../store/store";
import Toast from "react-native-toast-message";
import { StatusBar, View } from "react-native";
import MainApp from "./MainApp";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <MainApp />
      <Toast />
    </Provider>
  );
}
