import React from "react";
import Text from "../components/AppText";
import Screen from "../components/Screen";
import { View } from "react-native";
import Card from "../components/Card";

const HomeScreen = () => {
  return (
    <Screen style={{ paddingHorizontal: 8 }}>
      <Text>HomeScreen</Text>
      <Card label="Temperatura" value={30} icon="°C" />
    </Screen>
  );
};

export default HomeScreen;
