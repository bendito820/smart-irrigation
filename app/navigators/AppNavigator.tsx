import React from "react";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ActivityScreen from "../screens/ActivityScreen";
import SettingsNavigator from "./SettingsNavigator";

import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "rgba(34,36,40,1)",
          position: "absolute",
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#666" },
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={focused ? 24 : 22}
              color={focused ? "#fff" : "#666"}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Actividade",
          tabBarLabelStyle: { color: "#666" },
          tabBarIcon: ({ focused }) => (
            <Feather
              name="activity"
              size={focused ? 24 : 22}
              color={focused ? "#fff" : "#666"}
            />
          ),
        }}
        name="Activities"
        component={ActivityScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Definiçõoes",
          tabBarLabelStyle: { color: "#666" },
          tabBarIcon: ({ focused }) => (
            <Feather
              name="settings"
              size={focused ? 24 : 22}
              color={focused ? "#fff" : "#666"}
            />
          ),
        }}
        name="Settings"
        component={SettingsNavigator}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
