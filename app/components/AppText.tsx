import React, { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";

import { Platform } from "react-native";

interface Props {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

function AppText({ children, style, ...otherProps }: Props) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
