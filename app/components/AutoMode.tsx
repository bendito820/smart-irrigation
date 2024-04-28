import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toggle from "./Toggle";
import AppText from "./AppText";

export default function AutoMode() {
  const [toggleIsOn, setToggle] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="autorenew"
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
        Modo automático
      </AppText>
      <Toggle isOn={toggleIsOn} onToggle={() => setToggle(!toggleIsOn)} />
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
