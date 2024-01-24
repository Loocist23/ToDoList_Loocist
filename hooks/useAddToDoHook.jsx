import { useState } from 'react';

const useAddToDoHook = () => {
    const [todos, setTodos] = useState([]); // État pour stocker la liste des tâches
    const [newTodo, setNewTodo] = useState(''); // État pour stocker la nouvelle tâche à ajouter

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]); // Ajoute la nouvelle tâche à la liste
            setNewTodo(''); // Réinitialise l'entrée de la nouvelle tâche
        }
    };

    return { todos, newTodo, setNewTodo, addTodo };
};

export default useAddToDoHook;
