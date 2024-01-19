import { StyleSheet } from "react-native";
import React from "react";
import Button from "./src/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import List from "./src/components/List";
import Card from "./src/components/Card";

export default function App() {
  // const imageUrl = require("./assets/images/washing-maching.png");
  return (
    <SafeAreaView style={styles.container}>
      {/* <Button label="Continue" theme="light" type="large" /> */}
      {/* <List theme="light" large /> */}
      <Card icon="iron" label="Iron" description="Get your sleekness on" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
