import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Assurez-vous d'installer uuid avec npm ou yarn

const useAddToDoHook = () => {
    const [todos, setTodos] = useState([]);
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [newTodoDescription, setNewTodoDescription] = useState('');

    const addTodo = () => {
        if (newTodoTitle.trim() !== '') {
            const newTodo = {
                id: uuidv4(),
                title: newTodoTitle,
                description: newTodoDescription,
            };
            setTodos([...todos, newTodo]);
            setNewTodoTitle('');
            setNewTodoDescription('');
        }
    };

    return { todos, setNewTodoTitle, setNewTodoDescription, addTodo };
};

export default useAddToDoHook;