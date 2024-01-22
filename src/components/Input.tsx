import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const Input = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder={"Email"} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 5,
    height: 55,
  },
});
