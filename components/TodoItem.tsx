import { StyleSheet, Text, View } from "react-native";

type Props = { text: string };

export default function TodoItem({ text }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    gap: 10,
  },
  bullet: { fontSize: 18, lineHeight: 18 },
  text: { fontSize: 16 },
});
