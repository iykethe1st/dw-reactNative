import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import List from "../../components/List";
import { COLORS, ROUTES } from "../../constants";
import Button from "../../components/Button";

interface CourierDetailProps {
  navigation: any;
}

const DATA = [
  {
    labelOne: "John Dovy",
    labelTwo: "Courier Id: DC-64672",
    imgSrc: require("../../../assets/images/me.jpg"),
    img: true,
  },
];

const CourierDetail: React.FC<CourierDetailProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>The courier is on the way</Text>
          <Text style={styles.desc}>
            Please get your dirty laundry ready for pick up
          </Text>
        </View>

        <View style={styles.detailsWrapper}>
          <List data={DATA} theme="light" />
          <Text style={styles.time}>Arrives in 5 mins</Text>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => navigation.navigate(ROUTES.HOME)}
          type="large"
          theme="dark"
          label="Cancel Laundry"
        />
      </View>
    </SafeAreaView>
  );
};

export default CourierDetail;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  textWrapper: {
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.dark,
    marginVertical: 4,
  },
  desc: {
    fontSize: 14,
    marginVertical: 4,
    color: COLORS.gray,
    textAlign: "center",
  },
  detailsWrapper: {
    marginVertical: 10,
  },
  time: {
    fontWeight: "bold",
    color: COLORS.gray,
    marginVertical: 5,
  },
  buttonWrapper: {
    alignSelf: "center",
  },
});
