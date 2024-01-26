import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants";
import { Feather } from "@expo/vector-icons";

interface ButtonProps {
  label: string;
  theme: string;
  type: string;
  onPress?: () => void;
  disabled?: boolean;
  icon?: string;
}

const { width: screenWidth } = Dimensions.get("screen");

const Button: React.FC<ButtonProps> = ({
  label,
  theme,
  type,
  onPress,
  disabled,
  icon,
}) => {
  const buttonWidth = label.length * 16;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
          styles.button,
          theme === "dark" ? styles.dark : styles.light,
          type === "small"
            ? { width: buttonWidth }
            : { width: (screenWidth * 7) / 8 },
          disabled ? styles.disabled : null,
        ]}
      >
        {icon && <Feather name={icon} size={24} color={COLORS.dark} />}
        <Text
          style={[
            styles.text,
            theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    height: 50,
    borderRadius: 8,
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
  },
  disabled: {
    backgroundColor: COLORS.grayLight,
  },
  light: {
    backgroundColor: COLORS.grayLight,
  },
  dark: {
    backgroundColor: COLORS.primary,
  },
  lightText: {
    color: COLORS.primary,
  },
  darkText: {
    color: COLORS.white,
  },
});

export default Button;
