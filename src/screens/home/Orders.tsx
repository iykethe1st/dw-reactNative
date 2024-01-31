import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import List from "../../components/List";

const Orders = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TextInput style={styles.searchInput} placeholder="Search List..." />
        </View>

        <View style={styles.dateWrapper}>
          <Text style={styles.dateWrapper}>Today</Text>
          <List
            theme="light"
            labelOne="Wash & Iron"
            labelTwo="Paradise City Layout Enugu"
            labelFour="Completed"
            labelFive="₦2,500"
            icon="washing-machine"
            large
            iconLibrary="MaterialCommunityIcons"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 100,
    flex: 1,
  },
  searchInput: {
    marginVertical: 10,
    backgroundColor: COLORS.grayLight,
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 10,
  },

  dateWrapper: {
    marginVertical: 5,
    fontSize: 16,
    color: COLORS.dark,
    fontWeight: "bold",
  },
});
