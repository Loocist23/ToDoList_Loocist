import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TodoInputButton = ({ newTodo, setNewTodo, addTodo }) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                value={newTodo} 
                onChangeText={setNewTodo}
                placeholder="Enter a new todo"
            />
            <TouchableOpacity style={styles.button} onPress={addTodo}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        width: '100%',
        // Autres styles pour le conteneur
    },
    input: {
        padding: 10,
        width: '85%',
        
    },
    button: {
        padding: 10,
        // Styles pour le bouton
    }
});

export default TodoInputButton;