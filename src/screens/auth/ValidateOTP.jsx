import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import Button from "../../components/Button";
import { COLORS } from "../../constants";
import OTPInput from "../../components/auth/OTPInput";
import Toast from "react-native-toast-message";

const ValidateOTP = () => {
  const route = useRoute();

  const [textInfo, setTextInfo] = useState("");

  const handleResendOTP = () => {
    Toast.show({
      type: "success",
      text1: "Success",
      text2: `OTP successfully sent to ${route.params.phoneNumber}`,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.phoneText}>Enter 6-Digit Code</Text>

        <Text style={styles.text}>
          {`Please enter the code sent to ${route.params.phoneNumber}`}
        </Text>
      </View>

      <View style={styles.phoneWrapper}>
        <OTPInput />

        <Button label="Confirm" theme="dark" type="large" />
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>{"Didn't recieve any code? "}</Text>
        <TouchableOpacity onPress={handleResendOTP}>
          <Text style={styles.altText}>Resend OTP</Text>
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
  infoText: {
    color: COLORS.warning,
    marginVertical: 4,
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
