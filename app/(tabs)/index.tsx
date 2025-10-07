import ProfileCard from "@/components/ProfileCard";
import { ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileCard
        name="Alice"
        jobTitle="React Native Developer"
        imageUrl="https://picsum.photos/200/300"
      />
      <ProfileCard
        name="Bob"
        jobTitle="UI/UX Designer"
        imageUrl="https://picsum.photos/200/301"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    backgroundColor: "#f5f5f5",
  },
});
