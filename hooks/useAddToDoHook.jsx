import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';

const useAddToDoHook = () => {
    const [todos, setTodos] = useState([]);
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [newTodoDescription, setNewTodoDescription] = useState('');

    useEffect(() => {
        const loadTodos = async () => {
            const storedTodos = await AsyncStorage.getItem('todos');
            if (storedTodos) setTodos(JSON.parse(storedTodos));
        };

        loadTodos();
    }, []);

    const addTodo = async (title, description) => {
        const newTodo = {
            id: generateUniqueId(),
            title,
            description,
        };

        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
            console.log(error);
        }
    };

    function generateUniqueId() {
        return `${new Date().getTime()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    return { todos, setNewTodoTitle, setNewTodoDescription, addTodo };
};

export default useAddToDoHook;
