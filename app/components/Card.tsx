import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "./AppText";

interface Props {
  label?: string;
  value?: number;
  icon?: string;
}

export default function Card({ label, value, icon }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.separator} />
      <View>
        <Text style={styles.value}>{value}</Text>
        {icon && <Text style={styles.icon}>{icon}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(34,36,40,1)",
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: "center",
    borderRadius: 18,
    gap: 4,
  },
  label: { fontSize: 32, letterSpacing: -1, fontWeight: "200" },
  icon: {
    position: "absolute",
    right: -16,
    top: 8,
    fontSize: 18,
    fontWeight: "300",
    letterSpacing: -1,
  },
  value: {
    fontSize: 94,
    letterSpacing: -4,
    fontWeight: "300",
    position: "relative",
  },
  separator: {
    height: 1,
    backgroundColor: "#b3b3b3",
    width: "100%",
  },
});
