import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";

interface ListProps {
  labelOne?: string;
  labelTwo?: string;
  labelThree?: string;
  theme: string;
  icon?: any;
  large?: boolean;
  iconLibrary?: string;
}

const List: React.FC<ListProps> = ({
  theme,
  labelOne,
  labelTwo,
  labelThree,
  icon,
  large,
  iconLibrary,
}) => {
  if (large)
    return (
      <View
        style={[
          styles.largeContainer,
          theme === "dark" ? styles.dark : styles.light,
        ]}
      >
        <View style={styles.largeWrapper}>
          <View style={styles.iconWrapper}>
            <AntDesign
              name="dingding-o"
              size={40}
              color={theme === "dark" ? "#DBF6F6" : "#11BFBF"}
            />
            <View style={styles.textWrapper}>
              <Text
                style={[
                  styles.text,
                  styles.boldText,
                  theme === "dark" ? styles.darkText : styles.lightText,
                ]}
              >
                {labelOne}
              </Text>
              <Text
                style={[
                  styles.textSm,
                  theme === "dark" ? styles.darkText : styles.greyText,
                ]}
              >
                {labelOne}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={[
                styles.textSm,
                theme === "dark" ? styles.darkText : styles.greyText,
              ]}
            >
              List
            </Text>
          </View>
        </View>

        <View style={styles.largeWrapper}>
          <View style={styles.textWrapper}>
            <Text
              style={[
                styles.text,
                theme === "dark" ? styles.darkText : styles.greyText,
              ]}
            >
              List
            </Text>
          </View>
          <View>
            <Text style={[styles.text, styles.boldText]}>List</Text>
          </View>
        </View>
      </View>
    );

  return (
    <View
      style={[styles.container, theme === "dark" ? styles.dark : styles.light]}
    >
      <View style={styles.iconWrapper}>
        {iconLibrary === "MaterialIcons" && (
          <MaterialIcons
            name={icon}
            size={20}
            color={theme === "dark" ? "#DBF6F6" : COLORS.dark}
          />
        )}

        {iconLibrary === "MaterialCommunityIcons" && (
          <MaterialCommunityIcons
            style={styles.icon}
            name={icon}
            size={20}
            color={theme === "dark" ? "#DBF6F6" : "#11BFBF"}
          />
        )}
        <View style={styles.textWrapper}>
          <Text
            style={[
              styles.text,
              styles.labelOneText,
              theme === "dark" ? styles.darkText : styles.lightText,
            ]}
          >
            {labelOne}
          </Text>
          {labelTwo && (
            <Text
              style={[
                styles.text,
                theme === "dark" ? styles.labelTwoDark : styles.labelTwoLight,
              ]}
            >
              {labelTwo}
            </Text>
          )}
        </View>
      </View>
      {labelThree && (
        <View>
          <Text
            style={
              theme === "dark" ? styles.labelThreeLight : styles.labelThreeDark
            }
          >
            {labelThree}
          </Text>
        </View>
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    marginVertical: 2,
  },

  largeContainer: {
    flexDirection: "column",
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
    gap: 20,
  },
  largeWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingHorizontal: 5,
  },
  textWrapper: {
    gap: 2,
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
  },
  textSm: {
    fontSize: 14,
  },
  light: {
    backgroundColor: COLORS.grayLight,
  },
  dark: {
    backgroundColor: COLORS.primary,
  },

  lightText: {
    color: COLORS.dark,
  },
  darkText: {
    color: COLORS.light,
  },
  boldText: {
    color: COLORS.dark,
    fontWeight: "600",
  },
  greyText: {
    color: COLORS.grayLight,
  },
  labelOneText: {
    fontWeight: "bold",
  },
  labelTwoDark: {
    color: COLORS.light,
    fontSize: 14,
  },
  labelTwoLight: {
    color: COLORS.dark,
    fontSize: 14,
  },

  labelThreeLight: {
    color: COLORS.dark,
    fontSize: 14,
  },

  labelThreeDark: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: "bold",
  },
  icon: {
    // padding: 4,
  },
});
