import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const CustomTabBarButton = (props) => {
  const { children, accessibilityState, onPress } = props;
  if (accessibilityState.selected) {
    return (
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={onPress} style={styles.activeButton}>
          <Text>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={onPress} style={styles.inactiveButton}>
          <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default CustomTabBarButton;

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 8,
  },
  activeButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 8,
  },
  text: {},
  inactiveButton: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 8,
  },
});
