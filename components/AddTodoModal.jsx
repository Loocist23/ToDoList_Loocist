//AddTodoModal.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Modal, View, TouchableOpacity, StyleSheet, Text, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSettings } from '../context/SettingContext'; // Importez votre contexte de paramètres

const AddTodoModal = ({ isVisible, onClose, addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [dueDateText, setDueDateText] = useState('Select Due Date');

    const { isDarkMode } = useSettings();

    useEffect(() => {
        if (!isVisible) {
            return;
        }
        setDueDate(new Date());
        setDueDateText(new Date().toLocaleDateString());
    }, [isVisible]);

    const handleAddTodo = () => {
        addTodo(title, description, dueDate.toISOString());
        setTitle('');
        setDescription('');
        onClose();
    };

    const handleChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || dueDate;
        setShowDatePicker(Platform.OS === 'ios');
        setDueDate(currentDate);
        setDueDateText(currentDate.toLocaleDateString());
    };

    // Appliquer des styles dynamiques en fonction du mode sombre ou clair
    const dynamicStyles = StyleSheet.create({
        modalContent: {
            backgroundColor: isDarkMode ? '#333' : '#fff',
        },
        text: {
            color: isDarkMode ? '#fff' : '#000',
        },
        button: {
            backgroundColor: isDarkMode ? '#555' : '#ddd',
        }
    });

    return (
        <Modal
            animationType="slide"
            transparent
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={[styles.modalContent, dynamicStyles.modalContent]}>
                <TouchableOpacity style={[styles.closeButton, dynamicStyles.button]} onPress={onClose}>
                    <Text style={dynamicStyles.text}>Close</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Enter todo title"
                    placeholderTextColor={isDarkMode ? '#ccc' : '#666'}
                />

                <TextInput
                    style={styles.input}
                    value={description}
                    multiline
                    onChangeText={setDescription}
                    placeholder="Enter todo description (optional)"
                    placeholderTextColor={isDarkMode ? '#ccc' : '#666'}
                />

                <TouchableOpacity style={[styles.datePickerButton, dynamicStyles.button]} onPress={() => setShowDatePicker(true)}>
                    <Text style={dynamicStyles.text}>{dueDateText}</Text>
                </TouchableOpacity>

                {showDatePicker && (
                    <DateTimePicker
                        value={dueDate}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={handleChangeDate}
                        textColor={isDarkMode ? '#fff' : '#000'} // Paramètre textColor si disponible
                    />
                )}

                <TouchableOpacity style={[styles.addButton, dynamicStyles.button]} onPress={handleAddTodo}>
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

// Styles de base pour le composant
const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 10,
    },
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    datePickerButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        margin: 10,
    },
    addButton: {
        backgroundColor: '#2196F3',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },
    addButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
});

export default AddTodoModal;
