import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Button from "../../components/Button";
import { COLORS, ROUTES } from "../../constants";

const LaundryDetails = ({ navigation }) => {
  const [status, setStatus] = useState("ongoing");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          {status === "scheduled"
            ? "Laundry Scheduled"
            : status === "ongoing"
              ? "Laundry Started"
              : "Laundry Complete"}
        </Text>
        <Text style={styles.desc}>
          {status === "scheduled"
            ? "Your laundry DW-0379U90 is in line to be attended to, we will notify you on the progress"
            : status === "ongoing"
              ? "We will notify you when it's done"
              : "Your laundry DW-0379U90 is done and ready"}
        </Text>
      </View>

      <View>
        {status === "sceduled" ? (
          <Button theme="light" icon="clock" type="small" label="16 hrs left" />
        ) : null}
      </View>

      <View style={styles.imgWrapper}>
        {status === "scheduled" ? (
          <Image
            style={styles.img}
            source={require("../../../assets/images/scheduled.png")}
          />
        ) : (
          <Image
            style={styles.img}
            source={require("../../../assets/images/bubbles.png")}
          />
        )}
      </View>

      <View>
        <Button
          onPress={() => navigation.goBack()}
          theme="dark"
          type="large"
          label="Back"
        />
      </View>
    </SafeAreaView>
  );
};

export default LaundryDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  titleWrapper: {
    marginTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
    marginVertical: 10,
  },
  desc: {
    color: COLORS.gray,
    marginVertical: 10,
    textAlign: "center",
    fontSize: 16,
  },
  imgWrapper: {
    flex: 0.6,
    alignItems: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
});
