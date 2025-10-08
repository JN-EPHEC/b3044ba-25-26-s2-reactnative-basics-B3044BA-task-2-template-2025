import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

// Define the props interface for type safety
interface ProfileCardProps {
  name: string;
  jobTitle: string;
  imageUrl: string;
}

// The component receives 'props' as an argument.
// We use destructuring to get the values we need directly.
const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  jobTitle,
  imageUrl,
}) => {
  return (
    <View style={styles.card}>
      {/* Profile picture */}
      <Image source={{ uri: imageUrl }} style={styles.image} />

      {/*Texts container*/}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 20, alignItems: "center" }}>
      <ProfileCard
        name="Alice Martin"
        jobTitle="UX Designer"
        imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <ProfileCard
        name="John Doe"
        jobTitle="Software Engineer"
        imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
      />

      <ProfileCard
        name="Marie Dubois"
        jobTitle="Project Manager"
        imageUrl="https://randomuser.me/api/portraits/women/68.jpg"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textContainer: {
    marginLeft: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: 16,
    color: "gray",
  },
});

export default ProfileCard;
//tout est beau