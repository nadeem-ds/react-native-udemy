import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

const GoalInput = ({ onAddGoal, showModal, endAddGoalHandler }) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (text) => {
    setGoal(text);
  };

  const addGoalHandler = () => {
    onAddGoal(goal);
    setGoal(" ");
  };
  const closeGoalHanlder = () => {
    endAddGoalHandler();
  };
  const onCloseModal = () => {};
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../../assets/goal.png")} />
        <TextInput
          placeholder="Your Course Goal"
          style={styles.textInput}
          value={goal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeGoalHanlder} color="#FF6347" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#98FB98" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FFDAB9",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#311b6b",
    fontWeight: "bold",
    borderRadius: 10,
    width: "65%",
    borderRadius: 8,
    padding: 12,
    outlineColor: "#e4d0ff",
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContentL: "center",
    alignItems: "center",
  },
  button: {
    width: "50%",
    marginHorizontal: 8,
    marginVertical: 5,
    borderRadius: 12,
  },
});
