import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, ForgotPassword, Register } from "../screens";
import { ROUTES } from "../constants";
import VerifyOTP from "../screens/auth/VerifyOTP";
import ValidateOTP from "../screens/auth/ValidateOTP";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.VALIDATE_OTP}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.VERIFY_OTP} component={VerifyOTP} />
      <Stack.Screen name={ROUTES.VALIDATE_OTP} component={ValidateOTP} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
