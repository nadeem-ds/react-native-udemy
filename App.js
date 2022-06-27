import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalInput from "./src/components/GoalInput";
import GoalItem from "./src/components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);

  const goalHandleSubmit = (goal) => {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: goal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id != id);
    });
  };
  const startAddGoalHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <View style={styles.appContainer}>
      <Button title="Add new Goal" onPress={startAddGoalHandler} />
      <GoalInput
        onAddGoal={goalHandleSubmit}
        showModal={modalIsVisible}
        endAddGoalHandler={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <Text style={styles.goalheading}>Your Goal</Text>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              <GoalItem
                textData={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: "#FAFAD2",
  },

  goalsContainer: {
    flex: 5,
  },

  goalheading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#231651",
  },
});
