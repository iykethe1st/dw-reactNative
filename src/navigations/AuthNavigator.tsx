import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, ForgotPassword, Register } from "../screens";
import { ROUTES } from "../constants";

const Stack = createStackNavigator();

function AuthNavigator() {
  console.log(Stack);

  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
