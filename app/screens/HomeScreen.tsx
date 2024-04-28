import React, { useState } from "react";
import Text from "../components/AppText";
import Screen from "../components/Screen";
import { Pressable, View } from "react-native";
import Card from "../components/Card";
import Toggle from "../components/Toggle";
import ManualMode from "../components/ManualMode";
import AutoMode from "../components/AutoMode";
import CountDownTimer from "../components/CountDownTimer";
import axios from "axios";

const HomeScreen = () => {
  return (
    <Screen style={{ paddingHorizontal: 8, gap: 22 }}>
      <Text>HomeScreen</Text>
      <Card label="Temperatura" value={30} icon="°C" />
      <CountDownTimer />
      <ManualMode />
      <AutoMode />

      <Pressable
        onPress={async () => {
          const requestData = {
            mode: "manual",
            pump: "on", // Toggle pump on/off based on toggle state
          };

          try {
            await axios.post("http://192.168.0.28/pump-control", requestData, {
              headers: {
                "Content-Type": "application/json", // Specify content type as JSON
              },
            });
          } catch (error) {
            // Handle error
            console.log(error);
          }
        }}
      >
        <Text>Turn on Pump</Text>
      </Pressable>
    </Screen>
  );
};

export default HomeScreen;
