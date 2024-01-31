import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import Button from "../../components/Button";
import List from "../../components/List";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image
          style={styles.profileImage}
          source={require("../../../assets/images/me.jpg")}
        />
        <Text style={styles.nameText}>Ikenna Udemezue</Text>
        <Text style={styles.numberText}>+070 12345678</Text>
      </View>

      <View style={styles.editWrapper}>
        <Button type="small" theme="light" label="Edit Profile" icon="edit" />
      </View>

      <View style={styles.actionWrapper}>
        <List
          icon="message"
          theme="light"
          labelOne="Feedback"
          iconLibrary="FontAwesome"
        />

        <List
          icon="contact-support"
          theme="light"
          labelOne="Contact support"
          iconLibrary="MaterialIcons"
        />
        <List
          icon="log-out-outline"
          theme="light"
          labelOne="Sign out"
          iconLibrary="IonIcons"
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 100,
  },
  profileWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.dark,
    marginVertical: 10,
  },
  numberText: {
    color: COLORS.gray,
    fontSize: 16,
  },
  editWrapper: {
    marginVertical: 20,
    alignItems: "center",
  },
  actionWrapper: {
    marginHorizontal: 40,
  },
});
