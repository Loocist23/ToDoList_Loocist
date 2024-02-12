// TodosContext.js
import React, { createContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodosContext = createContext();

const generateUniqueId = () => `${new Date().getTime()}-${Math.random().toString(36).substr(2, 9)}`;

const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const loadTodos = async () => {
            const storedTodos = await AsyncStorage.getItem('todos');
            if (storedTodos) setTodos(JSON.parse(storedTodos));
        };

        loadTodos();
    }, []);

    useEffect(() => {
        const saveTodos = async () => {
            try {
                await AsyncStorage.setItem('todos', JSON.stringify(todos));
            } catch (error) {
                console.error("Erreur lors de la sauvegarde des todos", error);
            }
        };

        saveTodos();
    }, [todos]);

    // Ajouter un todo
    const addTodo = async (title, description, dueDate) => {
        const newTodo = {
            id: generateUniqueId(),
            title,
            description,
            dueDate,
            isCompleted: false,
        };

        setTodos([...todos, newTodo]);
    };

    // Supprimer un todo
    const deleteTodo = async (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    };

    // Modifier un todo
    const editTodo = async (todoId, newTitle, newDescription, newDueDate) => {
        setTodos(todos.map(todo => {
            if (todo.id === todoId) {
                return { ...todo, title: newTitle, description: newDescription , dueDate: newDueDate };
            }
            return todo;
        }));
    };

    const toggleTodoCompletion = (todoId) => {
        setTodos(todos.map(todo => todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    };

    // Passer l'état et les fonctions du contexte aux composants enfants
    return (
        <TodosContext.Provider value={{ todos, addTodo, deleteTodo, editTodo, toggleTodoCompletion }}>
            {children}
        </TodosContext.Provider>
    );
};

export { TodosContext, TodosProvider };
