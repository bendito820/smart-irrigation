import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigators/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* <View style={styles.container}>
      </View> */}
      <StatusBar style="inverted" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
