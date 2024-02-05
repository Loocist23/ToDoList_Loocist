import React, { useState } from 'react';
import { Button, ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import useAddToDoHook from '../hooks/useAddToDoHook';
import useTodoActions from '../hooks/useTodoActions'; // Assurez-vous d'importer le nouveau hook
import AddTodoModal from '../components/AddTodoModal';
import ToDoCard from '../components/ToDoCard';
import TodoDetailsModal from '../components/TodoDetailsModal';

const HomeScreen = () => {
    const { todos, newTodo, setNewTodo, addTodo } = useAddToDoHook();
    const { selectedTodo, isDetailsModalVisible, openDetailsModal, deleteTodo, editTodo } = useTodoActions(todos);

    const [isAddModalVisible, setIsAddModalVisible] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.addTodo} onPress={() => setIsAddModalVisible(true)}>
                <Text>Add a new todo</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {todos.map((todo, index) => (
                    // log the todo to see the structure
                    <ToDoCard key={todo.id} todo={todo} onPress={() => openDetailsModal(todo)} />
                ))}
            </ScrollView>

            <AddTodoModal
                isVisible={isAddModalVisible}
                onClose={() => setIsAddModalVisible(false)}
                newTodo={newTodo}
                setNewTodo={setNewTodo}
                addTodo={addTodo}
            />

            {selectedTodo && (
                <TodoDetailsModal
                    isVisible={isDetailsModalVisible}
                    onClose={() => openDetailsModal(null)} // Pour fermer la modal
                    todo={selectedTodo}
                    onDelete={() => deleteTodo(selectedTodo.id)} // Appel de deleteTodo avec l'ID du todo sélectionné
                    onEdit={editTodo}
                />

            )}
        </View>
    );
};

const styles = StyleSheet.create({
    addTodo: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginBottom: 10,
    },
});

export default HomeScreen;
