import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import { COLORS } from "../../constants";

const OTPInput = () => {
  const [otp, setOtp] = useState("");
  const boxArray = new Array(6).fill(0);

  return (
    <View style={styles.container}>
      <TextInput
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        style={styles.textInput}
        autoFocus
      />

      <View style={styles.otpWrapper}>
        {boxArray.map((_, index) => (
          <View style={styles.otpBox} key={index}>
            <Text>{otp[index]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
  },
  textInput: {
    width: 300,
    borderColor: "#e5e5e5",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    display: "none",
  },
  otpWrapper: {
    flexDirection: "row",
  },
  otpBox: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    height: 40,
    width: 40,
    marginHorizontal: 8,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
