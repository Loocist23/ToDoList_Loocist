//HomeScreen.jsx
import React, { useContext, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import AddTodoModal from '../components/AddTodoModal';
import ToDoCard from '../components/ToDoCard';
import TodoDetailsModal from '../components/TodoDetailsModal';
import { TodosContext } from '../context/TodoContext';
import { useSettings } from '../context/SettingContext'; // Importez useSettings

const HomeScreen = () => {
    const { todos, addTodo, deleteTodo, editTodo, toggleTodoCompletion } = useContext(TodosContext);
    const { isDarkMode } = useSettings(); // Utilisez isDarkMode depuis le contexte
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);

    const openDetailsModal = (todo) => {
        setSelectedTodo(todo);
        setIsDetailsModalVisible(true);
    };

    const closeDetailsModal = () => {
        setIsDetailsModalVisible(false);
        setSelectedTodo(null);
    };

    // Styles conditionnels en fonction du mode sombre
    const dynamicStyles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDarkMode ? '#333' : '#FFF', // Arrière-plan différent pour le mode sombre
        },
        addTodo: {
            padding: 10,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 5,
            backgroundColor: isDarkMode ? '#555' : '#fff', // Bouton différent pour le mode sombre
            alignSelf: 'center',
            marginBottom: 10,
        },
        addTodoText: {
            color: isDarkMode ? '#FFF' : '#000', // Texte différent pour le mode sombre
        },
    });

    return (
        <View style={dynamicStyles.container}>
            <TouchableOpacity
                onPress={() => setIsAddModalVisible(true)}
                style={dynamicStyles.addTodo}
            >
                <Text style={dynamicStyles.addTodoText}>Add a new todo</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {todos.map((todo) => (
                    <ToDoCard
                        key={todo.id}
                        todo={todo}
                        onPress={() => openDetailsModal(todo)}
                        onToggleCompletion={toggleTodoCompletion}
                    />
                ))}
            </ScrollView>

            <AddTodoModal
                isVisible={isAddModalVisible}
                onClose={() => setIsAddModalVisible(false)}
                addTodo={addTodo}
            />

            {selectedTodo && (
                <TodoDetailsModal
                    isVisible={isDetailsModalVisible}
                    onClose={closeDetailsModal}
                    todo={selectedTodo}
                    onDelete={() => {
                        deleteTodo(selectedTodo.id);
                        closeDetailsModal();
                    }}
                    onEdit={editTodo}
                    onToggleCompletion={toggleTodoCompletion}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
});

export default HomeScreen;
