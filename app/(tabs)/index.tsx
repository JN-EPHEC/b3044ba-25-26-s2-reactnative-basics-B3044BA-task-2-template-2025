import TodoItem from "@/components/TodoItem";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const USERS_DATA = [
  { id: '1', nom: 'Alice Martin', email: 'alice.martin@email.com' },
  { id: '2', nom: 'Benjamin Dubois', email: 'ben.dubois@email.com' },
  { id: '3', nom: 'Chloé Garcia', email: 'chloe.g@email.com' },
  { id: '4', nom: 'David Petit', email: 'david.petit@email.com' },
  { id: '5', nom: 'Émilie Rousseau', email: 'emilie.rousseau@email.com' },
]

export default function HomeScreen() {

  
  const [todos, setTodos] = useState([
    { id: "1", text: "Acheter du lait" },
    { id: "2", text: "Réviser le cours de React" },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now().toString(), text: newTodo.trim() },
      ]);
      setNewTodo("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <TextInput
        style={styles.input}
        placeholder="Nouvelle tâche..."
        value={newTodo}
        onChangeText={setNewTodo}
      />

  <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
  <Text style={styles.addButtonText}>Add</Text>
  </TouchableOpacity>


      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nom: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  addButton: {
  backgroundColor: "#007BFF", // bleu moderne
  paddingVertical: 12,
  borderRadius: 8, // arrondi du bouton
  alignItems: "center",
  marginBottom: 15, // espace sous le bouton
},
addButtonText: {
  color: "#fff",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: 16,
},
});