import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CounterScreen() {
  // Déclare une variable d'état "count"
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter Example</Text>
      <Text style={styles.value}>{count}</Text>

      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  value: {
    fontSize: 32,
    marginBottom: 20,
  },
});

