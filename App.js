import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.red}>
        <Text>text1</Text>
      </View>
      <View style={styles.blue}>
        <Text>text2</Text>
      </View>
      <View style={styles.pink}>
        <Text>text3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  red: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  blue: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  pink: {
    backgroundColor: "pink",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
