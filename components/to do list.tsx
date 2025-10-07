import { AppRegistry, FlatList, StyleSheet, View } from 'react-native';
import TodoItem from './components/TodoItem';

const todos = [
  { id: '1', text: 'Apprendre TypeScript' },
  { id: '2', text: 'Créer une app React Native' },
  { id: '3', text: 'Boire un café ☕' },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoItem text={item.text} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});

AppRegistry.registerComponent('main', () => App);
export default App;
