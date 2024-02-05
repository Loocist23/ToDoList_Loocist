import { useState } from 'react';

const useTodoActions = (initialTodos) => {
    const [todos, setTodos] = useState(initialTodos);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);

    const openDetailsModal = (todo) => {
        setSelectedTodo(todo);
        setIsDetailsModalVisible(true);
    };

    const deleteTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
        setIsDetailsModalVisible(false);
    };

    const editTodo = (todoId, newText) => {
        // Logique pour modifier un todo par son id avec le nouveau texte
        setIsDetailsModalVisible(false);
    };

    return {
        todos,
        setTodos,
        selectedTodo,
        isDetailsModalVisible,
        openDetailsModal,
        deleteTodo,
        editTodo
    };
};

export default useTodoActions;
