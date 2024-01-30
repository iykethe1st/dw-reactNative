import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchInput from "../../components/SearchInput";
import List from "../../components/List";
import { COLORS, ROUTES } from "../../constants";
import Button from "../../components/Button";

interface NavigationProps {
  navigation: any;
}

const DATA = [
  {
    labelOne: "Enugu, Nigeria",
    labelTwo: "11 Cetenary layout",
  },
];

const ChooseLocation: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput />
      <View style={styles.locationWrapper}>
        <Text style={styles.locationTitle}>Saved Location</Text>
        <List
          data={DATA}
          theme="light"
          icon="location-arrow"
          iconLibrary="FontAwesome"
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => navigation.navigate(ROUTES.COURIER_SEARCH)}
          type="large"
          theme="dark"
          label="Confirm location"
        />
      </View>
    </SafeAreaView>
  );
};

export default ChooseLocation;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,

    flex: 1,
  },

  locationWrapper: {
    marginVertical: 10,
    flex: 1,
  },
  locationTitle: {
    color: COLORS.dark,
    fontSize: 16,
    marginVertical: 5,
    fontWeight: "bold",
  },
  buttonWrapper: {
    alignSelf: "center",
  },
});
