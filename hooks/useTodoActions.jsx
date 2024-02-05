import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useTodoActions = () => {
    const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);

    useEffect(() => {
        const loadTodos = async () => {
            const storedTodos = await AsyncStorage.getItem('todos');
            if (storedTodos) setTodos(JSON.parse(storedTodos));
        };

        loadTodos();
    }, []);

    useEffect(() => {
        console.log(todos); // Pour voir les todos actuels après chaque mise à jour
    }, [todos]);
    

    const openDetailsModal = (todo) => {
        setSelectedTodo(todo);
        setIsDetailsModalVisible(true);
    };

    const deleteTodo = async (todoId) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        console.log(updatedTodos); // Pour voir les todos après la suppression
        setTodos(updatedTodos);
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
            console.log(error);
        }
        setIsDetailsModalVisible(false);
    };

    const editTodo = async (todoId, newTitle, newDescription) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === todoId) {
                return { ...todo, title: newTitle, description: newDescription };
            }
            return todo;
        });

        setTodos(updatedTodos);
        await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        setIsDetailsModalVisible(false);
    };

    return {
        todos,
        selectedTodo,
        isDetailsModalVisible,
        openDetailsModal,
        deleteTodo,
        editTodo
    };
};

export default useTodoActions;
