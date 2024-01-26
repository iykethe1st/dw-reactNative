import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, ForgotPassword, Register } from "../screens";
import { COLORS, ROUTES } from "../constants";
import VerifyOTP from "../screens/auth/VerifyOTP";
import ValidateOTP from "../screens/auth/ValidateOTP";
import { DrawerNavigator } from "./DrawerNavigator";
import ChooseLocation from "../screens/home/ChooseLocation";
import CourierSearch from "../screens/home/CourierSearch";

const Stack = createStackNavigator();

function AuthNavigator() {
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
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={ROUTES.VERIFY_OTP} component={VerifyOTP} />
      <Stack.Screen name={ROUTES.VALIDATE_OTP} component={ValidateOTP} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.HOME}
        component={DrawerNavigator}
      />
      <Stack.Screen name={ROUTES.CHOOSE_LOCATION} component={ChooseLocation} />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.COURIER_SEARCH}
        component={CourierSearch}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
