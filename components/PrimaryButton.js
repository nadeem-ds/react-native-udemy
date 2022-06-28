import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.warn("btn cliecked");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.textContainer}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    marginVertical: 5,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 5,
  },
  textContainer: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
