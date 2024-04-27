import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Text from "../components/AppText";

export default function ActivityScreen() {
  const sensors: {
    label: string;
    endpoint: string;
    value: number;
    icon?: string;
  }[] = [
    { label: "Temperatura", endpoint: "temperatures", value: 20, icon: "°c" },
    { label: "Humidade", endpoint: "humidity", value: 30 },
    { label: "H. Solo", endpoint: "soilhumidity", value: 80 },
  ];

  return (
    <Screen style={styles.screen}>
      <Text style={styles.text}>Actividade</Text>
      <ScrollView>
        <View style={{ gap: 12 }}>
          {sensors.map((sensor) => (
            <Card
              key={sensor.label}
              label={sensor.label}
              value={sensor.value}
              icon={sensor?.icon}
            />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 8, gap: 22 },
  text: { fontSize: 40, letterSpacing: -2, marginBottom: 20 },
});
