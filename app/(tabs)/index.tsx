import ProfileCard from "@/components/ProfileCard";
import { ScrollView, StyleSheet, Text } from "react-native";

const USERS_DATA = [
  { id: '1', nom: 'Alice Martin', email: 'alice.martin@email.com' },
  { id: '2', nom: 'Benjamin Dubois', email: 'ben.dubois@email.com' },
  { id: '3', nom: 'Chloé Garcia', email: 'chloe.g@email.com' },
  { id: '4', nom: 'David Petit', email: 'david.petit@email.com' },
  { id: '5', nom: 'Émilie Rousseau', email: 'emilie.rousseau@email.com' },
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Voici mes modifications pour F3</Text>

      <ProfileCard
        name="Sami"
        jobTitle="Ingenieer"
        imageUrl="https://picsum.photos/200/300"
      />
      <ProfileCard
        name="Tautri"
        jobTitle="Product owner"
        imageUrl="https://picsum.photos/200/300"
      />
      <ProfileCard
        name="Anthony"
        jobTitle="Ingenieer"
        imageUrl="https://picsum.photos/200/300"
      />
      <ProfileCard
        name="Amine"
        jobTitle="Scrum Master"
        imageUrl="https://picsum.photos/200/300"
      />
      <ProfileCard
        name="Kevin"
        jobTitle="Ingenieer"
        imageUrl="https://picsum.photos/200/300"
      />
      <ProfileCard
        name="Sofiane"
        jobTitle="Ingenieer"
        imageUrl="https://picsum.photos/200/300"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});