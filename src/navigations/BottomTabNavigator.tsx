import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Notifications, Orders, Profile } from "../screens";
import { COLORS, ROUTES } from "../constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { useRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  // const route = useRoute();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = "home";
          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.PROFILE) {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused ? "notifications" : "notifications-outline";
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
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
      <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen name={ROUTES.ORDERS} component={Orders} />
    </Tab.Navigator>
  );
}
