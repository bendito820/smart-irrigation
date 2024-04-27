import React, { useState } from "react";
import Text from "../components/AppText";
import Screen from "../components/Screen";
import { View } from "react-native";
import Card from "../components/Card";
import Toggle from "../components/Toggle";
import ManualMode from "../components/ManualMode";
import AutoMode from "../components/AutoMode";
import CountDownTimer from "../components/CountDownTimer";

const HomeScreen = () => {
  return (
    <Screen style={{ paddingHorizontal: 8, gap: 22 }}>
      <Text>HomeScreen</Text>
      <Card label="Temperatura" value={30} icon="°C" />
      <CountDownTimer />
      <ManualMode />
      <AutoMode />
    </Screen>
  );
};

export default HomeScreen;
