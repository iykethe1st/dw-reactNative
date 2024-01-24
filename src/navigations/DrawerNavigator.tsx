import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, ROUTES } from "../constants";
import { Home, Notifications } from "../screens";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, color, size }) => {
            return <Ionicons name="home" size={18} color={color} />;
          },
          title: "Home",
        }}
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused, color, size }) => {
            return <Ionicons name="notifications" size={18} color={color} />;
          },
          title: "Notifications",
        }}
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
      />
    </Drawer.Navigator>
  );
}
