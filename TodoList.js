// TodoList.js
import React from 'react';
import { View, TextInput, Button, FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './DetailScreen';
import TodoItem from './TodoItem';

const Stack = createStackNavigator();

const TodoList = ({ navigation }) => {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), title: newTodo }]);
      setNewTodo('');
    }
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const navigateToDetail = (title) => {
    navigation.navigate('Detail', { title });
  };

  const renderTodoItem = ({ item }) => (
    <TodoItem item={item} onPress={navigateToDetail} removeTodo={removeTodo} />
  );

  const filterTodos = () => {
    if (searchTerm.trim() === '') {
      return todos;
    }

    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Barre de recherche */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher par titre"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
      </View>

      {/* Liste des todos */}
      <FlatList
        style={styles.todoList}
        data={filterTodos()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTodoItem}
      />

      {/* Champ pour ajouter une nouvelle tâche */}
      <View style={styles.addTodoContainer}>
        <TextInput
          style={styles.addTodoInput}
          placeholder="Ajouter une nouvelle tâche"
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
          returnKeyType="done" 
          onSubmitEditing={addTodo} 
        />
        <Button title="Ajouter" onPress={addTodo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  searchBar: {
    width: '100%',
    marginBottom: 10,
  },
  searchInput: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
  },
  todoList: {
    flex: 1,
    marginBottom: 10,
  },
  addTodoContainer: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTodoInput: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default TodoList;
