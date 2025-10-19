import React, { useEffect, useState } from "react";
import MMKV from "../utils/MMKV";
import constant from "../utils/constant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/login_page/login_view";
import ProductView from "../pages/product_page/product_view";

const Stack = createNativeStackNavigator();
export default function MyStack() {
  const [initialRoute, setInitialRoute] = useState("");

  useEffect(() => {
    async function checkToken() {
      const token = await MMKV.getString(constant.token);

      setInitialRoute(token ? "Product" : "Login");
    }
    checkToken();
  }, [initialRoute]);

  if (!initialRoute) return null;

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
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
