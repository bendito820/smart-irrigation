import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable } from "react-native";
import Text from "../components/AppText";
import AutoMode from "../components/AutoMode";
import Card from "../components/Card";
import CountDownTimer from "../components/CountDownTimer";
import ManualMode from "../components/ManualMode";
import Screen from "../components/Screen";

const HomeScreen = () => {
  const [render, setRender] = useState(false);
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender(!render);
    }, 1 * 1000);
  }, [render]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://esp8266.local/sensor");
      setIsLoading(false);
      setData(res.data);
    };
    getData();

    setInterval(() => {
      getData();
    }, 10 * 1000);
  }, []);

  return (
    <Screen style={{ paddingHorizontal: 8, gap: 22 }}>
      <Text>HomeScreen</Text>
      {isLoading ? (
        <ActivityIndicator animating={isLoading} />
      ) : (
        <Card label="Temperatura" value={Number(data?.temperature)} icon="°C" />
      )}
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
