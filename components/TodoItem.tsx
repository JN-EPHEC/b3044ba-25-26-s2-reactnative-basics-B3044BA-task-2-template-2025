import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Definition type de pops

interface TodoItemProps {
    text : string;
}

// Composant 
const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
    return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default TodoItem;

// 🎨 Styles
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // pour Android
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});