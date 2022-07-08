import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./Screens/CategoriesScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CategoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummtText: {
    margin: 20,
    borderWidth: 2,
    padding: 10,
    backgroundColor: "grey",
  },
});
