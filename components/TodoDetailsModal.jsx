//TodoDetailsModal.jsx
import React, { useState, useContext } from 'react';
import { Modal, View, Text, TextInput, StyleSheet, Switch, Button, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSettings } from '../context/SettingContext'; // Importez votre contexte de paramètres

const TodoDetailsModal = ({ isVisible, onClose, todo, onDelete, onEdit, onToggleCompletion }) => {
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [dueDate, setDueDate] = useState(new Date(todo.dueDate));
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const { isDarkMode } = useSettings(); // Utilisez useContext pour accéder à isDarkMode

    const handleSubmit = () => {
        onEdit(todo.id, title, description, dueDate.toISOString());
        if (todo.isCompleted !== isCompleted && onToggleCompletion) {
            onToggleCompletion(todo.id);
        }
        onClose();
    };

    const handleToggleCompletion = () => setIsCompleted(previousState => !previousState);

    const handleChangeDate = (event, selectedDate) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (selectedDate) {
            setDueDate(selectedDate);
        }
    };

    // Appliquer des styles dynamiques en fonction du mode sombre ou clair
    const dynamicStyles = StyleSheet.create({
        modalView: {
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
        <Modal animationType="slide" transparent={true} visible={isVisible} onRequestClose={onClose}>
            <View style={styles.centeredView}>
                <View style={[styles.modalView, dynamicStyles.modalView]}>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                        multiline
                        numberOfLines={1}
                        placeholderTextColor={isDarkMode ? '#ccc' : '#666'}
                    />
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        numberOfLines={4}
                        placeholderTextColor={isDarkMode ? '#ccc' : '#666'}
                    />

                    <TouchableOpacity
                        style={[styles.datePickerButton, dynamicStyles.button]}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <Text style={dynamicStyles.text}>{dueDate.toLocaleDateString()}</Text>
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

                    <View style={styles.toggleContainer}>
                        <Text style={dynamicStyles.text}>Completed: </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isCompleted ? "#f5dd4b" : "#f4f3f4"}
                            onValueChange={handleToggleCompletion}
                            value={isCompleted}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button title="Save" onPress={handleSubmit} />
                        <Button title="Delete" onPress={onDelete} color="#ff5c5c" />
                        <Button title="Close" onPress={onClose} color="#a4a4a4" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

// Styles de base pour le composant
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        maxWidth: 300,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    textArea: {
        minHeight: 60,
        textAlignVertical: 'top',
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    datePickerButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        margin: 10,
    },
});

export default TodoDetailsModal;
