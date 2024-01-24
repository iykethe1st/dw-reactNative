import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../constants";

const NotificationIcon = ({ onPress, unread }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.bellIconWrapper}>
      <Ionicons
        style={styles.bellIcon}
        name="notifications-outline"
        size={24}
      />
      {unread && <Entypo style={styles.dotIcon} name="dot-single" size={28} />}
    </TouchableOpacity>
  );
};

export default NotificationIcon;

const styles = StyleSheet.create({
  bellIconWrapper: {
    backgroundColor: COLORS.grayLight,
    padding: 8,
    borderRadius: 8,
    position: "relative",
  },
  bellIcon: {
    color: COLORS.primary,
  },
  dotIcon: {
    color: COLORS.danger,
    position: "absolute",
    right: 5,
  },
});
