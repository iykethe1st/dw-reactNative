import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Text style={styles.logoText}>DW</Text>
      </View>
      <Text style={styles.text}>Dash Wash</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  logoText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#FFF",
  },

  logoWrapper: {
    backgroundColor: "#11BFBF",
    alignItems: "center",
    width: 120,
    borderRadius: 4,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#11BFBF",
  },
});
