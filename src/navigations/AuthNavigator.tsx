import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, ForgotPassword, Register } from "../screens";
import { COLORS, ROUTES } from "../constants";
import VerifyOTP from "../screens/auth/VerifyOTP";
import ValidateOTP from "../screens/auth/ValidateOTP";
import { DrawerNavigator } from "./DrawerNavigator";
import ChooseLocation from "../screens/home/ChooseLocation";
import CourierSearch from "../screens/home/CourierSearch";
import CourierDetail from "../screens/home/CourierDetail";
import Slider from "../components/Slider";
import WelcomeSlides from "../data";
import { useNavigation } from "@react-navigation/native";
import LaundryDetails from "../screens/home/LaundryDetails";

const Stack = createStackNavigator();

function AuthNavigator() {
  const navigation = useNavigation();

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
      initialRouteName={ROUTES.WELCOME}
    >
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={ROUTES.VERIFY_OTP} component={VerifyOTP} />

      <Stack.Screen
        name={ROUTES.WELCOME}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: "white" },
        }}
      >
        {(props) => (
          <Slider
            slides={WelcomeSlides}
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          />
        )}
      </Stack.Screen>

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

      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.COURIER_DETAIL}
        component={CourierDetail}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.LAUNDRY_DETAILS}
        component={LaundryDetails}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
