import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import List from "./src/components/List";
import Card from "./src/components/Card";
import Carousel from "./src/components/Carousel";
import Slider from "./src/components/Slider";
import Logo from "./src/components/Logo";
import Slides from "./src/data";

import AuthNavigator from "./src/navigations/AuthNavigator";
import VerifyOTP from "./src/screens/auth/VerifyOTP";
import OTPInput from "./src/components/auth/OTPInput";

export default function App() {
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={styles.container}> */}
      {/* <Button label="Continue" theme="light" type="large" /> */}
      {/* <List theme="light" large /> */}
      {/* <Card icon="iron" label="Iron" description="Get your sleekness on" /> */}
      {/* <Carousel /> */}
      {/* <Slider slides={Slides} /> */}
      {/* <Logo /> */}
      <AuthNavigator />
      {/* <VerifyOTP /> */}
      {/* <OTPInput /> */}
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
