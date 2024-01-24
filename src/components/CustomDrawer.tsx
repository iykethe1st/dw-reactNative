import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { COLORS, IMGS } from "../constants";

const { width } = Dimensions.get("screen");

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={IMGS.bgPattern} style={{ height: 140 }}>
        <Image source={IMGS.user} style={styles.userImg} />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: "absolute",
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 110 / 2 + 10,
  },
});
