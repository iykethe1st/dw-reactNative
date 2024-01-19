import { StyleSheet } from "react-native";
import React from "react";
import Button from "./src/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import List from "./src/components/List";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button label="Continue" theme="light" type="large" />
      <List theme="light" large />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
