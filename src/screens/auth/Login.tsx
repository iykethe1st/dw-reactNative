import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { COLORS, ROUTES } from "../../constants";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Logo />
        <Text style={styles.text}>Log in to continue</Text>
      </View>

      <View>
        <TextInput style={styles.input} placeholder={"Email"} />
        <TextInput style={styles.input} placeholder={"Password"} />

        <Button
          onPress={() => navigation.navigate(ROUTES.HOME)}
          label="Log in"
          theme="dark"
          type="large"
        />

        <TouchableOpacity>
          <Text style={[styles.altText, styles.forgotText]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text>{"Don't have an account? "}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
          <Text style={styles.altText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    // position: "relative",
    width: "100%",
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

  text: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.gray,
  },
  forgotText: {
    marginVertical: 10,
  },
  altText: {
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.primary,
  },

  footer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 60,
    flexDirection: "row",
  },
});
