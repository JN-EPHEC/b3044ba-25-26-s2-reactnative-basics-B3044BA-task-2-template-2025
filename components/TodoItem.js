import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TodoItem = ()=> {
    return (
    <View style={styles.item}>
        <Text style={styles.title}>My To Do list:</Text>
        <Text style={styles.texte}>* Learn React Native</Text>
        <Text style={styles.texte}>* Build a static UI</Text>
        <Text style={styles.texte}>* Practice with StyleSheet</Text>
        <Text style={styles.texte}>* Aminé est gentille monsieur</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  texte: {
    fontSize: 12,
    fontWeight: 'light',
},
item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
}
})

export default TodoItem;