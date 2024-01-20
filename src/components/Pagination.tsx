import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");

const Pagination = ({ data, scrollX, currentIndex }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#ccc", "#11BFBF", "#ccc"],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={index.toString()}
            style={[
              styles.dot,
              {
                width: dotWidth,
                // opacity: opacity,
                backgroundColor: backgroundColor,
              },
              //   index === currentIndex && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // bottom: 35,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#ccc",
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: "#000",
  },
});
