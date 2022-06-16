import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.dummtText}>Nadeem Here!!</Text>
      <Text style={styles.dummtText}>Welcoem to React Native Course😊</Text>
      <Button
        title="Click me to Submit👍"
        onPress={() => alert("you submitted the form✔✔")}
      />
      <StatusBar style="auto" />
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
