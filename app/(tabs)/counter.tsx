import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  // Function to increment the count.
  const incrementCount = () => {
    // Write your logic here to increment the count
    setCount(count + 1);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Count : {count}</Text>
       <Button 
       title="incrementation" 
       onPress={incrementCount}
       />
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
