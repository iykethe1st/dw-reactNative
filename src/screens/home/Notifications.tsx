import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import List from "../../components/List";
import { ScrollView } from "react-native-gesture-handler";

const NOTIFICATIONS = [
  { labelOne: "Your laundry is on the way!", labelThree: "3:00 PM" },
];

const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listWrapper}>
          <Text style={styles.dateText}>Today</Text>
          <List
            icon="checkmark-done-circle"
            theme="light"
            data={NOTIFICATIONS}
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
