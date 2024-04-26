import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import Screen from "../components/Screen";

const HomeScreen = () => {
  return (
    <Screen>
      <Text style={{ color: "#fff" }}>HomeScreen</Text>
    </Screen>
  );
};

export default HomeScreen;
