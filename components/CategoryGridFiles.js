import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryGridFiles = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridFiles;

const styles = StyleSheet.create({});
