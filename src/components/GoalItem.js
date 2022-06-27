import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ textData, onDeleteItem, id }) => {
  return (
    <Pressable
      onPress={onDeleteItem.bind(this, id)}
      android_ripple={{ color: "red" }}
    >
      <View>
        <Text style={styles.listStyle}>{textData}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listStyle: {
    backgroundColor: "#231651",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    color: "white",
    fontWeight: "bold",
    margin: 2,
  },
});
