import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { COLORS, ROUTES } from "../../constants";
import PhoneInput from "react-native-phone-number-input";

const { width: screenWidth } = Dimensions.get("screen");

const Register = ({ navigation }) => {
  const phoneInput = useRef<PhoneInput>(null);
  const [value, setValue] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.phoneText}>Mobile Number</Text>

        <Text style={styles.text}>Please enter your mobile phone number</Text>
      </View>

      <View style={styles.phoneWrapper}>
        <PhoneInput
          ref={phoneInput}
          containerStyle={{
            borderRadius: 8,
            width: (screenWidth * 7) / 8,
          }}
          textContainerStyle={{
            borderRadius: 8,
            width: (screenWidth * 7) / 8,
          }}
          defaultValue={value}
          defaultCode="NG"
          onChangeFormattedText={(text) => {
            setValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
        <Button label="Send OTP" theme="dark" type="large" />
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>{"Already have an account? "}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
          <Text style={styles.altText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
    // fontSize: 16,
    color: COLORS.gray,
    // fontWeight: "bold",
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
