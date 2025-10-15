import { useState } from "react";

export default function HomeScreen() {
  // Initialize state for the counter with an initial value of 0.
  const [count, setCount] = useState(0);

  // Function to increment the count.
  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount =() => {
    setCount (count -1);
  }

  const Reset=() => {
    setCount(0);
  }

  const increment100count = () => {
    setCount(count +100);
  }}
