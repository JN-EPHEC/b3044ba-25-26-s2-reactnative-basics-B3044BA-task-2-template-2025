import TodoItem from "@/components/TodoItem";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  const todos = [
    "Finish React Native homework",
    "Review TypeScript basics",
    "Go to the gym",
    "Call a friend",
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>My Todo List</Text>

      {todos.map((task, i) => (
        <TodoItem key={i} text={task} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
});
