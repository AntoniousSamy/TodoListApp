import { createStackNavigator } from "@react-navigation/stack";
import routes from "../constants/routes";
import FirstScreen from "../screens/FirstScreen";
import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={routes.FRISTSCREEN}>
      <Stack.Screen
        name={routes.FRISTSCREEN}
        component={FirstScreen}
        options={{ title: "MyHome", headerShown: false }}
      />
      <Stack.Screen
        name={routes.LOGIN}
        component={LogIn}
        options={{ title: "LogInPage", headerShown: false }}
      />
      <Stack.Screen
        name={routes.SIGNUP}
        component={SignUp}
        options={{ title: "SignUpPage", headerShown: false }}
      />
      <Stack.Screen
        name={routes.HOME}
        component={Home}
        options={{ title: "HomePage", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default AuthNavigation;
