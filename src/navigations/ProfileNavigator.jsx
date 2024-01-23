import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, ForgotPassword, Register } from "../screens";
import { COLORS, ROUTES } from "../constants";
import VerifyOTP from "../screens/auth/VerifyOTP";
import ValidateOTP from "../screens/auth/ValidateOTP";
import Home from "../screens/home/Home";
import { BottomTabNavigator } from "./BottomTabNavigator";

const Stack = createStackNavigator();

function ProfileNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        // title: routes.params.phoneNumber
      }}
      initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      {/* <Stack.Screen name={ROUTES.HOME} component={Home} /> */}
      <Stack.Screen name={ROUTES.VERIFY_OTP} component={VerifyOTP} />
      <Stack.Screen name={ROUTES.VALIDATE_OTP} component={ValidateOTP} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
