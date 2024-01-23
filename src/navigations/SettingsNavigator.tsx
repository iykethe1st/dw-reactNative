import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, ForgotPassword, Register } from "../screens";
import { COLORS, ROUTES } from "../constants";
import VerifyOTP from "../screens/auth/VerifyOTP";
import ValidateOTP from "../screens/auth/ValidateOTP";
import Home from "../screens/home/Home";
import { BottomTabNavigator } from "./BottomTabNavigator";
import Settings from "../screens/home/Settings";

const Stack = createStackNavigator();

function SettingsNavigator() {
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
        options={{
          headerShown: false,
        }}
        name={ROUTES.SETTINGS}
        component={Settings}
      />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
