import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Button from "./src/components/Button";

import List from "./src/components/List";
import Card from "./src/components/Card";
import Carousel from "./src/components/Carousel";
import Slider from "./src/components/Slider";
import Logo from "./src/components/Logo";
import Slides from "./src/data";

export default function App() {
  // const imageUrl = require("./assets/images/washing-maching.png");
  return (
    <SafeAreaView style={styles.container}>
      {/* <Button label="Continue" theme="light" type="large" /> */}
      {/* <List theme="light" large /> */}
      {/* <Card icon="iron" label="Iron" description="Get your sleekness on" /> */}
      {/* <Carousel /> */}
      <Slider slides={Slides} />
      {/* <Logo /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
