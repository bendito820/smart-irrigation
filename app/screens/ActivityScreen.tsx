import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Text from "../components/AppText";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useApi from "../hooks/useApi";

export default function ActivityScreen() {
  const [render, setRender] = useState(false);
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRender(!render);
    }, 1 * 1000);
  }, [render]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://esp8266.local/sensor");
      setData(res.data);
    };
    getData();

    setInterval(() => {
      getData();
    }, 10 * 1000);
  }, []);

  if (isLoading)
    return <ActivityIndicator animating={isLoading} size={"large"} />;

  const sensors: {
    label: string;
    endpoint: string;
    value: number;
    icon?: string;
  }[] = [
    {
      label: "Temperatura",
      endpoint: "temperatures",
      value: data?.temperature!,
      icon: "°c",
    },
    { label: "Humidade", endpoint: "humidity", value: data?.humidity },
    { label: "H. Solo", endpoint: "soilhumidity", value: data?.sensorValue },
  ];

  return (
    <Screen style={styles.screen}>
      <Text style={styles.text}>Actividade</Text>
      <ScrollView>
        <View style={{ gap: 12, marginBottom: 66 }}>
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
