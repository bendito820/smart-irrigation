import React, { useState } from "react";
import Text from "../components/AppText";
import Screen from "../components/Screen";
import { View } from "react-native";
import Card from "../components/Card";
import Toggle from "../components/Toggle";

const HomeScreen = () => {
  const [toggleIsOn, setToggle] = useState(false);

  return (
    <Screen style={{ paddingHorizontal: 8 }}>
      <Text>HomeScreen</Text>
      <Card label="Temperatura" value={30} icon="°C" />
      <Toggle
        isOn={toggleIsOn}
        onToggle={() => {
          setToggle(!toggleIsOn);
        }}
      />
      {toggleIsOn && <Text>Button is on</Text>}
    </Screen>
  );
};

export default HomeScreen;
