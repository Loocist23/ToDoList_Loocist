// ToDoCard.js
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Checkbox from './CheckBox';

const ToDoCard = ({ todo, onPress }) => {
    const [isSelected, setSelection] = useState(false);

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    const truncatedTitle = truncateText(todo.title, 30); // Tronque à 30 caractères pour le titre
    const truncatedDescription = truncateText(todo.description, 60); // Tronque à 60 caractères pour la description

    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Checkbox
                isChecked={isSelected}
                onCheckChange={setSelection}
            />
            <View style={styles.todoInfo}>
                <Text style={styles.todoTitle}>{truncatedTitle}</Text>
                {todo.description && (
                    <Text style={styles.todoDescription}>{truncatedDescription}</Text>
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
        marginLeft: 5,
    },
    todoDescription: {
        fontSize: 16,
        color: 'grey',
    },
});

export default ToDoCard;
