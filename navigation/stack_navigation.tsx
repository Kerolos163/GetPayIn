import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/login_page/login_view";
import ProductView from "../pages/product_page/product_view";

const Stack = createNativeStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={ProductView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
