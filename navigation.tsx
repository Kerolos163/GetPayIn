import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./pages/login_page/login_view";
const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
