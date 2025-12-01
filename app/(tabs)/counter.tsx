import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export default function CounterScreen() {
  // Initialise l'état du compteur
  const [count, setCount] = useState(0);

  // Fonction pour incrémenter le compteur
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.countText}>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  countText: {
    fontSize: 48,
    fontWeight: "600",
    marginVertical: 20,
  },
});