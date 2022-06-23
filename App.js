import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your Course Goal" style={styles.textInput} />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "80%",
    borderRadius: 8,
    padding: 8,
  },
});
