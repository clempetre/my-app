import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const prenoms = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Emma',
    'Frank',
    'Grace',
    'Hannah',
    'Ivy',
    'Jack',
    'Katherine',
    'Liam',
    'Mia',
    'Noah',
    'Olivia',
    'Sophia',
    'Thomas',
    'Uma',
    'Victor',
    'Zoe',
  ];

  const showGreetingAlert = (prenom) => {
    Alert.alert(`Bonjour ${prenom}`);
  };

  const renderPrenomItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onLongPress={() => showGreetingAlert(item)}
      >
        <Text style={styles.buttonText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={prenoms}
        renderItem={renderPrenomItem}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  button: {
    width: 'auto',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 30,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default App;
