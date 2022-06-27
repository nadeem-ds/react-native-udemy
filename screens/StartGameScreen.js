import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View>
      <Text>StartGameScreen</Text>
      <TextInput placeholder="Enter Text" />
      <PrimaryButton children="Reset" />
      <PrimaryButton children="Confirm" />
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({});
