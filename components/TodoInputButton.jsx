// TodoInputButton.js
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TodoInputButton = ({ title, setTitle, description, setDescription, addTodo }) => {
    console.log('Title (in TodoInputButton):', title); // Ajout d'un console.log pour le titre
    console.log('Description (in TodoInputButton):', description); // Ajout d'un console.log pour la description
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                value={title} // Utilisez la valeur du titre
                onChangeText={setTitle} // Utilisez la fonction pour mettre à jour le titre
                placeholder="Enter todo title"
            />
            <TextInput 
                style={styles.input} 
                value={description} // Utilisez la valeur de la description
                onChangeText={setDescription} // Utilisez la fonction pour mettre à jour la description
                placeholder="Enter todo description (optional)"
            />
            <TouchableOpacity style={styles.button} onPress={addTodo}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        width: '100%',
    },
    input: {
        padding: 10,
        width: '100%',
    },
    button: {
        padding: 10,
    }
});

export default TodoInputButton;
