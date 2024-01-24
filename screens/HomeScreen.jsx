import React, { useState } from 'react';
import { Modal, Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useAddToDoHook from '../hooks/useAddToDoHook';
import AddTodoModal from '../components/AddTodoModal';
import ToDoCard from '../components/ToDoCard';

const HomeScreen = () => {
    const { todos, newTodo, setNewTodo, addTodo } = useAddToDoHook();
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={styles.addTodo} onPress={() => setIsAddModalVisible(true)}>
                <Text>Add a new todo</Text>
            </TouchableOpacity>
            
            <AddTodoModal
                isVisible={isAddModalVisible}
                onClose={() => setIsAddModalVisible(false)}
                newTodo={newTodo}
                setNewTodo={setNewTodo}
                addTodo={addTodo}
            />
                
            {todos.map((todo, index) => (
                <ToDoCard todo={todo} key={index} />
            ))}
                
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
    },
    closeButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        backgroundColor: '#fff',
        width: '15%',
    }
});

export default HomeScreen;
