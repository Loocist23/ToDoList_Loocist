//ToDoCard.jsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Checkbox from './CheckBox';
import { useSettings } from '../context/SettingContext';

const ToDoCard = ({ todo, onPress, onToggleCompletion }) => {
    const { completedTodoTextColor, isDarkMode } = useSettings();

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    const truncatedTitle = truncateText(todo.title, 30);
    const truncatedDescription = truncateText(todo.description, 60);

    const dynamicStyles = StyleSheet.create({
        card: {
            backgroundColor: isDarkMode ? '#333' : '#fff',
        },
        todoTitle: {
            color: todo.isCompleted ? completedTodoTextColor : isDarkMode ? '#fff' : '#000',
        },
        todoDescription: {
            color: isDarkMode ? '#ddd' : 'grey',
        }
    });

    return (
        <TouchableOpacity onPress={onPress} style={[styles.card, dynamicStyles.card]}>
            <Checkbox
                isChecked={todo.isCompleted}
                onCheckChange={() => onToggleCompletion(todo.id)}
            />
            <View style={styles.todoInfo}>
                <Text style={[styles.todoTitle, dynamicStyles.todoTitle]}>
                    {truncatedTitle}
                </Text>
                {todo.description && (
                    <Text style={[styles.todoDescription, dynamicStyles.todoDescription]}>
                        {truncatedDescription}
                    </Text>
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
    },
});

export default ToDoCard;
