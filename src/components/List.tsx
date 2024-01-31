import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome6,
} from "@expo/vector-icons";
import { COLORS } from "../constants";

interface ListProps {
  labelOne?: string;
  labelTwo?: string;
  labelThree?: string;
  labelFour?: string;
  labelFive?: string;
  theme: string;
  icon?: any;
  large?: boolean;
  iconLibrary?: string;
  img?: boolean;
  imgSrc?: ImageSourcePropType | undefined;
  selectable?: boolean;
  onPress?: () => void;
}

const List: React.FC<ListProps> = ({
  theme,
  labelOne,
  labelTwo,
  labelThree,
  labelFour,
  labelFive,
  icon,
  large,
  iconLibrary,
  img,
  imgSrc,
  selectable,
  onPress,
}) => {
  if (large)
    return (
      <TouchableOpacity
        style={[
          styles.largeContainer,
          theme === "dark" ? styles.dark : styles.light,
        ]}
        onPress={onPress}
      >
        <View style={styles.largeWrapper}>
          <View style={styles.iconWrapper}>
            {img && (
              <Image
                source={require("../../assets/images/me.jpg")}
                style={styles.image}
              />
            )}
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
                color={theme === "dark" ? "#DBF6F6" : COLORS.primary}
              />
            )}

            {iconLibrary === "IonIcons" && (
              <Ionicons
                style={styles.icon}
                name={icon}
                size={20}
                color={theme === "dark" ? "#DBF6F6" : COLORS.primary}
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
              <Text
                style={[
                  styles.text,
                  theme === "dark" ? styles.labelTwoDark : styles.labelTwoLight,
                ]}
              >
                {labelTwo}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={[
                styles.text,
                theme === "dark" ? styles.labelTwoDark : styles.labelTwoLight,
              ]}
            >
              {labelThree}
            </Text>
          </View>
        </View>

        <View style={styles.largeWrapper}>
          <View style={styles.textWrapper}>
            <Text
              style={
                theme === "dark" ? styles.labelFourDark : styles.labelFourLight
              }
            >
              {labelFour}
            </Text>
          </View>
          <View>
            <Text style={[styles.text, styles.boldText]}>{labelFive}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );

  if (selectable) {
    return (
      <View
        style={[
          styles.container,
          theme === "dark" ? styles.dark : styles.light,
        ]}
      >
        <View style={styles.iconWrapper}>
          {img && <Image source={imgSrc} style={styles.image} />}
          {iconLibrary === "MaterialIcons" && (
            <MaterialIcons
              name={icon}
              size={24}
              color={theme === "dark" ? "#DBF6F6" : COLORS.primary}
            />
          )}

          {iconLibrary === "MaterialCommunityIcons" && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={24}
              color={theme === "dark" ? "#DBF6F6" : COLORS.primary}
            />
          )}

          {iconLibrary === "IonIcons" && (
            <Ionicons
              style={styles.icon}
              name={icon}
              size={24}
              color={theme === "dark" ? "#DBF6F6" : COLORS.primary}
            />
          )}

          {iconLibrary === "FontAwesome" && (
            <FontAwesome6
              style={styles.icon}
              name={icon}
              size={24}
              color={theme === "dark" ? "#DBF6F6" : COLORS.primary}
            />
          )}
          <View style={styles.textWrapper}>
            <Text
              style={[
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
                theme === "dark"
                  ? styles.labelThreeLight
                  : styles.labelThreeDark
              }
            >
              {labelThree}
            </Text>
          </View>
        )}
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.container, theme === "dark" ? styles.dark : styles.light]}
    >
      <View style={styles.iconWrapper}>
        {img && <Image source={imgSrc} style={styles.image} />}
        {iconLibrary === "MaterialIcons" && (
          <MaterialIcons
            name={icon}
            size={24}
            color={theme === "dark" ? "#DBF6F6" : COLORS.primary}
          />
        )}

        {iconLibrary === "MaterialCommunityIcons" && (
          <MaterialCommunityIcons
            style={styles.icon}
            name={icon}
            size={24}
            color={theme === "dark" ? "#DBF6F6" : COLORS.primary}
          />
        )}

        {iconLibrary === "IonIcons" && (
          <Ionicons
            style={styles.icon}
            name={icon}
            size={24}
            color={theme === "dark" ? "#DBF6F6" : COLORS.primary}
          />
        )}

        {iconLibrary === "FontAwesome" && (
          <FontAwesome6
            style={styles.icon}
            name={icon}
            size={24}
            color={theme === "dark" ? "#DBF6F6" : COLORS.primary}
          />
        )}
        <View style={styles.textWrapper}>
          <Text
            style={[
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
    </TouchableOpacity>
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
    marginVertical: 5,
  },
  listTitle: {
    marginVertical: 5,
    fontSize: 16,
    color: COLORS.dark,
    fontWeight: "bold",
  },
  largeContainer: {
    flexDirection: "column",
    marginVertical: 5,
    justifyContent: "center",
    // alignItems: "flex-start",
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
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  textWrapper: {
    gap: 2,
    marginLeft: 10,
    alignContent: "center",
    justifyContent: "center",
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

  labelFourLight: {
    color: COLORS.primary,
    fontWeight: "bold",
  },

  labelFourDark: {
    color: COLORS.dark,
  },

  icon: {
    // padding: 4,
  },
});
