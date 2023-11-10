// TodoItem.js
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ item, onPress, removeTodo }) => (
  <TouchableOpacity onPress={() => onPress(item.title)}>
    <View style={styles.todoContainer}>
      <Text>{item.title}</Text>
      <Button title="Supprimer" onPress={() => removeTodo(item.id)} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default TodoItem;
