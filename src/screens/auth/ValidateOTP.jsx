import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import Button from "../../components/Button";
import { COLORS } from "../../constants";

import OTPInput from "../../components/auth/OTPInput";

const ValidateOTP = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.phoneText}>Enter OTP</Text>

        <Text style={styles.text}>
          Please enter the code sent to +234 70490211121
        </Text>
      </View>

      <View style={styles.phoneWrapper}>
        <OTPInput />

        <Button label="Confirm" theme="dark" type="large" />
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>{"Already have an account? "}</Text>
        <TouchableOpacity>
          <Text style={styles.altText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    paddingHorizontal: 16,
    position: "relative",
    width: "100%",
  },
  titleWrapper: {
    alignItems: "center",
    gap: 20,
    marginVertical: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 5,
    height: 55,
  },
  phoneInput: {
    borderRadius: 10,
  },
  phoneText: {
    fontSize: 18,
    color: COLORS.black,
    fontWeight: "bold",
  },
  text: {
    color: COLORS.gray,
  },
  forgotText: {
    marginVertical: 10,
  },
  altText: {
    fontWeight: "bold",
    color: COLORS.primary,
  },

  phoneWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
    flexDirection: "row",
  },
});

export default ValidateOTP;
