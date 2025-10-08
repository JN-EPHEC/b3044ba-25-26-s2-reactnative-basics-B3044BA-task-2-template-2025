import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  // Initialize state for the counter with an initial value of 0.
  const [count, setCount] = useState(0);

  // Function to increment the count.
  const incrementCount = () => {
    setCount(count + 1 );
  }

  const decrementCount =() => {
    setCount(count -1 );
  }
  const maxCount = () => {

    setCount(count + 100);
  }
  const minCount = () => {

    setCount (count - 100)
  }
  const Reset = () => {

    setCount(0);

  }

  return (
     <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>

      <Button
        title="Increment + 1"
        onPress={incrementCount}
      />
      <br></br>
      <Button 
      title="Increment + 100"
      onPress={maxCount}
      />
      <br></br>
      <Button
      title="reset"
      onPress={Reset}
      />
      <br></br>
      <Button
      title="Decrement - 1 "
      onPress={decrementCount}
      />
      <br></br>
      <Button
      title="Decrement - 100"
      onPress={minCount}
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
