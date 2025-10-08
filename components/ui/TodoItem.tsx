import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TodoItemProps {
  text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

export default TodoItem;
