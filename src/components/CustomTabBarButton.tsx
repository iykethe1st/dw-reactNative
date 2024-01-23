import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const CustomTabBarButton = (props) => {
  const { children, accessibilityState, onPress } = props;
  if (accessibilityState.selected) {
    return (
      //   <View style={styles.btnWrapper}>
      <TouchableOpacity onPress={onPress} style={styles.activeButton}>
        <Text>{children}</Text>
      </TouchableOpacity>
      //   </View>
    );
  } else {
    return (
      //   <View style={styles.btnWrapper}>
      <TouchableOpacity onPress={onPress} style={styles.inactiveButton}>
        <Text>{children}</Text>
      </TouchableOpacity>
      //   </View>
    );
  }
};

export default CustomTabBarButton;

const styles = StyleSheet.create({
  btnWrapper: {},
  activeButton: {},
  inactiveButton: {},
});
