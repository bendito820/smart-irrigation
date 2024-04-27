import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toggle from "./Toggle";
import AppText from "./AppText";

export default function ManualMode() {
  const [toggleIsOn, setToggle] = useState<boolean>(false);

  return (
    <View
      style={{
        backgroundColor: "rgba(34,36,40,1)",
        flexDirection: "row",
        paddingHorizontal: 12,
        paddingVertical: 8,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 22,
      }}
    >
      <MaterialCommunityIcons name="pump" size={24} color="#fff" />
      <AppText style={{ fontSize: 14, letterSpacing: 1 }}>Modo Manual</AppText>
      <Toggle
        isOn={toggleIsOn}
        onToggle={() => {
          setToggle(!toggleIsOn);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
