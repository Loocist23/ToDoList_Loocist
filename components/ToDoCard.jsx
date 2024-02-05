// ToDoCard.js
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Checkbox from './CheckBox';

const ToDoCard = ({ todo, onPress }) => {
    const [isSelected, setSelection] = useState(false);

    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Checkbox
                isChecked={isSelected}
                onCheckChange={setSelection}
            />
            <View style={styles.todoInfo}>
                <Text style={styles.todoTitle}>{todo.title}</Text>
                {todo.description && (
                    <Text style={styles.todoDescription}>{todo.description}</Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    checkbox: {
        marginRight: 8,
    },
    todoInfo: {
        flex: 1,
    },
    todoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    todoDescription: {
        fontSize: 16,
        color: 'grey',
    },
});

export default ToDoCard;
