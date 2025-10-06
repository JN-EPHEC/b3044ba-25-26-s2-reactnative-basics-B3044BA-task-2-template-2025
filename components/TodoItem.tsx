import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TodoItem({ text }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#e0e0e0",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 18,
    color: "#333",
  },
});
