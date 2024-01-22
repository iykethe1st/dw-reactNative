import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ButtonProps {
  label: string;
  theme: string;
  type: string;
}

const { width: screenWidth } = Dimensions.get("screen");

const Button: React.FC<ButtonProps> = ({ label, theme, type }) => {
  const buttonWidth = label.length * 16;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          theme === "dark" ? styles.dark : styles.light,
          type === "small"
            ? { width: buttonWidth }
            : { width: (screenWidth * 7) / 8 },
        ]}
      >
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
    backgroundColor: "#37D9F0",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
  },

  text: {
    fontWeight: "500",
    fontSize: 16,
  },
  light: {
    backgroundColor: "#DBF6F6",
  },
  dark: {
    backgroundColor: "#11BFBF",
  },
  lightText: {
    color: "#11BFBF",
  },
  darkText: {
    color: "white",
  },
});

export default Button;
