// AddTodoModal.js
import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import TodoInputButton from './TodoInputButton';

const AddTodoModal = ({ isVisible, onClose, addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTodo = () => {
        console.log('Title:', title); // Ajout d'un console.log pour le titre
        console.log('Description:', description); // Ajout d'un console.log pour la description
        addTodo({
            title,
            description,
            // Vous pouvez ajouter un ID unique ici si nécessaire
            
        });
        setTitle(''); // Réinitialisez le titre
        setDescription(''); // Réinitialisez la description
        onClose();
    };

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={{ marginTop: 22 }}>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text>Close</Text>
                </TouchableOpacity>
                <TodoInputButton
                    title={title} // Passez le titre
                    setTitle={setTitle} // Passez la fonction pour mettre à jour le titre
                    description={description} // Passez la description
                    setDescription={setDescription} // Passez la fonction pour mettre à jour la description
                    addTodo={handleAddTodo}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    closeButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        backgroundColor: '#fff',
        width: '15%',
    }
});

export default AddTodoModal;
