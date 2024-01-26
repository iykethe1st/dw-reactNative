import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { COLORS, ROUTES } from "../../constants";
import NotificationIcon from "../../components/NotificationIcon";
import Card from "../../components/Card";
import List from "../../components/List";
import { useNavigation } from "@react-navigation/native";

interface NavigationProps {
  navigation: any;
}

const Home: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Hello, Ikenna</Text>
          <NotificationIcon onPress={() => {}} unread={false} />
        </View>

        <View style={styles.locationWrapper}>
          <List
            icon="my-location"
            theme="dark"
            labelOne="Current Location"
            labelTwo="Paradise city Layout, Enugu"
            iconLibrary="MaterialIcons"
          />
        </View>

        <View style={styles.activityWrapper}>
          <Text style={styles.activityText}>
            What do you want to get done today?
          </Text>
          <View style={styles.cardWrapper}>
            <Card
              onPress={() => navigation.navigate(ROUTES.CHOOSE_LOCATION)}
              icon={"washing-machine"}
              label={"Laundry"}
              description="Schedule your laundry, includes ironing too"
            ></Card>
            <Card
              icon={"iron"}
              label={"Just Iron"}
              description="Got clean, rumpled laundy? Let's straighten it"
            ></Card>
          </View>
        </View>

        <View style={styles.orderWrapper}>
          <Text style={styles.orderTitle}>Ongoing Laundry</Text>
          <List
            icon="washing-machine-alert"
            theme="light"
            labelOne="DW-78479302"
            labelThree="22 Hours left"
            iconLibrary="MaterialCommunityIcons"
          />
        </View>

        <View style={styles.orderWrapper}>
          <Text style={styles.orderTitle}>Recently Completed</Text>
          <List
            icon="washing-machine-alert"
            theme="light"
            labelOne="DW-78479302"
            labelThree="22 Hours left"
            iconLibrary="MaterialCommunityIcons"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 100,
  },
  headerWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  locationWrapper: {
    marginVertical: 20,
  },
  activityWrapper: {},
  activityText: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  cardWrapper: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 10,
  },
  orderWrapper: {
    marginVertical: 20,
  },
  orderTitle: {
    marginVertical: 10,
    fontSize: 16,
    color: COLORS.dark,
    fontWeight: "bold",
  },
});
