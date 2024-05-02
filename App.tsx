import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigators/AppNavigator";
import QueryClientProvider from "./app/QueryClientProvider";

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider>
        <AppNavigator />
        <StatusBar style="inverted" />
      </QueryClientProvider>
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
