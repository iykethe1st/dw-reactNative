import { StyleSheet, View } from "react-native";
import React from "react";
import Button from "./src/components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Button label="Continue" theme="light" type="small" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});
