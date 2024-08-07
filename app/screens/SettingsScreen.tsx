import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";

export default function SettingsScreen() {
  return (
    <Screen style={styles.screen}>
      <Text style={styles.text}>Definições</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 8, gap: 22 },
  text: {
    fontSize: 40,
    letterSpacing: -2,
    marginBottom: 20,
    color: "#fff",
    fontWeight: "300",
  },
});
