import ProfileCard from "@/components/ProfileCard";
import { StyleSheet, View } from "react-native";

const USERS_DATA = [
  { id: '1', nom: 'Alice Martin', email: 'alice.martin@email.com', imageUrl: "https://picsum.photos/200/300" },
  { id: '2', nom: 'Benjamin Dubois', email: 'ben.dubois@email.com', imageUrl: "https://picsum.photos/200/300" },
  { id: '3', nom: 'Chloé Garcia', email: 'chloe.g@email.com', imageUrl: "https://picsum.photos/200/300" },
  { id: '4', nom: 'David Petit', email: 'david.petit@email.com', imageUrl: "https://picsum.photos/200/300" },
  { id: '5', nom: 'Émilie Rousseau', email: 'emilie.rousseau@email.com', imageUrl: "https://picsum.photos/200/300" },
];


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      { /* Render the list of users using the UserItem component */ }
      {USERS_DATA.map(user => (
        <ProfileCard
          key={user.id}
          name={user.nom}
          jobTitle={user.email}
          imageUrl={user.imageUrl}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
