import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Notifications, Orders, Profile } from "../screens";
import { COLORS, ROUTES } from "../constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { useRoute } from "@react-navigation/native";
import Settings from "../screens/home/Settings";
import SettingsNavigator from "./SettingsNavigator";
import { StyleSheet } from "react-native";
import CustomTabBarButton from "../components/CustomTabBarButton";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  // const route = useRoute();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary,

        tabBarIcon: ({ color, size, focused }) => {
          let iconName = "home";
          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.PROFILE) {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === ROUTES.ORDERS) {
            if (focused) {
              return (
                <MaterialIcons
                  name="local-laundry-service"
                  size={24}
                  color={color}
                />
              );
            } else {
              return (
                <MaterialIcons
                  name="local-laundry-service"
                  size={24}
                  color={color}
                />
              );
            }
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        name={ROUTES.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        name={ROUTES.ORDERS}
        component={Orders}
      />
      {/* <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} /> */}
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarLabel: "Settings",
        }}
      />
      <Tab.Screen
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        name={ROUTES.PROFILE}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.primary,
    position: "absolute",
    borderTopWidth: 0,
    // bottom: 15,
    // borderRadius: 20,
    // left: 10,
    height: 100,
    // right: 10,
  },
});
