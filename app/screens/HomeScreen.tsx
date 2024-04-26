import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import Text from "../components/AppText";

import Screen from "../components/Screen";

const HomeScreen = () => {
  return (
    <Screen>
      <Text>HomeScreen</Text>
    </Screen>
  );
};

export default HomeScreen;
