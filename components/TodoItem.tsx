import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TodoItem({ text }: { text: string }) {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{text}</Text>
      </View>
    );
  }
  
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // pour Android
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});