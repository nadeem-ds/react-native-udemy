import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);
  const goalInputHandler = (text) => {
    setGoal(text);
  };
  const goalHandleSubmit = () => {
    setCourseGoal((currentCourseGoal) => [...currentCourseGoal, goal]);
    setGoal("");
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Course Goal"
          style={styles.textInput}
          value={goal}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={goalHandleSubmit} />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalheading}>Your Goal</Text>
        {courseGoal.map((goal) => (
          <Text style={styles.listStyle}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "65%",
    borderRadius: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  listStyle: {
    backgroundColor: "pink",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    color: "white",
    fontWeight: "bold",
    margin: 5,
  },
  goalheading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "pink",
  },
});
