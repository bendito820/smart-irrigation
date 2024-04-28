import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toggle from "./Toggle";
import AppText from "./AppText";
import axios from "axios";
import api from "../api/client";

export default function ManualMode() {
  const [toggleIsOn, setToggle] = useState<boolean>(false);

  const handleSubmit = async () => {
    setToggle(!toggleIsOn);

    const requestData = {
      mode: "manual",
      pump: toggleIsOn ? "off" : "on", // Toggle pump on/off based on toggle state
    };

    try {
      // http://esp8266-control/pump-control
      await axios.post("http://192.168.0.28/pump-control", requestData, {
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="pump"
          size={toggleIsOn ? 26 : 24}
          color={toggleIsOn ? "#fff" : "#b3b3b3"}
        />
      </View>
      <AppText
        style={[
          styles.text,
          {
            color: toggleIsOn ? "#fff" : "#b3b3b3",
            fontWeight: toggleIsOn ? "600" : "400",
          },
        ]}
      >
        Modo Manual
      </AppText>
      <Toggle isOn={toggleIsOn} onToggle={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(34,36,40,1)",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 22,
  },
  iconContainer: { width: 28, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 14, letterSpacing: 1 },
});
