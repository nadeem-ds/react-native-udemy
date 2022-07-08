import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/DummyData";
import React from "react";
import CategoryGridFiles from "../components/CategoryGridFiles";

const CategoriesScreen = () => {
  const renderCategoriesItem = (itemData) => {
    return (
      <CategoryGridFiles
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoriesItem}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
