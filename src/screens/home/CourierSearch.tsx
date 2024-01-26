import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { COLORS, ROUTES } from "../../constants";

const CourierSearch = ({ navigation }) => {
  const animatedValueX = useRef(new Animated.Value(0)).current;
  const animatedValueY = useRef(new Animated.Value(0)).current;

  const moveImage = () => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(animatedValueX, {
          toValue: 1,
          duration: Math.round(Math.random() * 10000), // Adjust the duration as needed
          useNativeDriver: true,
        }),
        Animated.timing(animatedValueY, {
          toValue: 1,
          duration: Math.round(Math.random() * 10000), // Adjust the duration as needed
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    moveImage();
  }, []);

  const translateX = animatedValueX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const translateY = animatedValueY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.headerText}>Finding the nearest courier</Text>
        <Text style={styles.bodyText}>
          Please wait while we connect you with the nearest available rider
        </Text>
      </View>

      <View style={styles.imgWrapper}>
        <Image
          source={require("../../../assets/images/searchMap.png")}
          style={styles.searchMap}
        />

        <Animated.View
          style={[
            styles.searchLensWrapper,
            {
              transform: [
                { translateX: translateX },
                { translateY: translateY },
              ],
            },
          ]}
        >
          <Image
            source={require("../../../assets/images/searchLens.png")}
            style={[styles.searchLens]}
          />
        </Animated.View>
      </View>

      <Button
        onPress={() => navigation.navigate(ROUTES.CHOOSE_LOCATION)}
        type="large"
        theme="dark"
        label="Cancel"
      />
    </SafeAreaView>
  );
};

export default CourierSearch;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textWrapper: {
    marginTop: 40,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: COLORS.dark,
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: 14,
    color: COLORS.gray,
    textAlign: "center",
    margin: 10,
  },
  imgWrapper: {
    position: "relative",
  },
  searchMap: {
    width: 200,
    height: 200,
  },
  searchLensWrapper: {
    position: "absolute",
  },
  searchLens: {
    width: 80,
    height: 80,
    top: 20,
    left: 20,
  },
});
