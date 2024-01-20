import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

interface ListProps {
  labelOne: string;
  labelTwo: string;
  labelThree: string;
  theme: string;
  icon: any;
  large?: boolean;
}

const List: React.FC<ListProps> = ({
  theme,
  labelOne,
  labelTwo,
  labelThree,
  icon,
  large,
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
                List
              </Text>
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
        <AntDesign
          name="dingding-o"
          size={40}
          color={theme === "dark" ? "#DBF6F6" : "#11BFBF"}
        />
        <View style={styles.textWrapper}>
          <Text
            style={[
              styles.text,
              theme === "dark" ? styles.darkText : styles.lightText,
            ]}
          >
            List
          </Text>
          <Text
            style={[
              styles.text,
              theme === "dark" ? styles.darkText : styles.lightText,
            ]}
          >
            List
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={[
            styles.text,
            theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          List
        </Text>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
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
    gap: 4,
  },
  textWrapper: {
    gap: 2,
  },
  text: {
    fontSize: 16,
  },
  textSm: {
    fontSize: 14,
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
  boldText: {
    color: "black",
    fontWeight: "600",
  },
  greyText: {
    color: "grey",
  },
});
