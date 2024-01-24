import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import SearchInput from "../../components/SearchInput";
import { COLORS } from "../../constants";
import List from "../../components/List";
import { ScrollView } from "react-native-gesture-handler";

const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Orders</Text> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listWrapper}>
          <Text style={styles.dateText}>Today</Text>
          <List
            icon="checkmark-done-circle"
            theme="light"
            labelOne="Your laundry is on the way!"
            labelThree="3:00 PM"
            iconLibrary="IonIcons"
          />
          <List
            icon="checkmark-done-circle"
            theme="light"
            labelOne="Your laundry is done!"
            labelThree="3:15 PM"
            iconLibrary="IonIcons"
          />
        </View>

        <View style={styles.listWrapper}>
          <Text style={styles.dateText}>Yesterday</Text>
          <List
            icon="checkmark-done-circle"
            theme="light"
            labelOne="50% off your next laundry"
            labelThree="12:01 AM"
            iconLibrary="IonIcons"
          />
          <List
            icon="checkmark-done-circle"
            theme="light"
            labelOne="Your laundry is on the way"
            labelThree="3:00 PM"
            iconLibrary="IonIcons"
          />
          <List
            icon="checkmark-done-circle"
            theme="light"
            labelOne="Your laundry is done!"
            labelThree="3:15 PM"
            iconLibrary="IonIcons"
          />
          <List
            icon="checkmark-done-circle"
            theme="light"
            labelOne="A free coupon just for you"
            labelThree="3:15 PM"
            iconLibrary="IonIcons"
          />
        </View>

        <View style={styles.listWrapper}>
          <Text style={styles.dateText}>23 Jan 2024</Text>
          <List
            icon="checkmark-done-circle"
            theme="light"
            labelOne="50% off your next laundry"
            labelThree="12:01 AM"
            iconLibrary="IonIcons"
          />
          <List
            icon="checkmark-done-circle"
            theme="light"
            labelOne="Your laundry is on the way"
            labelThree="3:00 PM"
            iconLibrary="IonIcons"
          />
          <List
            icon="checkmark-done-circle"
            theme="light"
            labelOne="Your laundry is done!"
            labelThree="3:15 PM"
            iconLibrary="IonIcons"
          />
          <List
            icon="checkmark-done-circle"
            theme="light"
            labelOne="A free coupon just for you"
            labelThree="3:15 PM"
            iconLibrary="IonIcons"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  searchInput: {
    marginVertical: 10,
    backgroundColor: COLORS.grayLight,
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 10,
  },
  listWrapper: {
    marginVertical: 10,
  },
  dateText: {
    color: COLORS.black,
    fontSize: 16,
    marginVertical: 5,
    fontWeight: "bold",
  },
});
