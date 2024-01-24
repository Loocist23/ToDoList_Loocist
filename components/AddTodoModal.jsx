import React from 'react';
import { Modal, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import TodoInputButton from './TodoInputButton';

const AddTodoModal = ({ isVisible, onClose, newTodo, setNewTodo, addTodo }) => {
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
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    addTodo={() => {
                        addTodo();
                        onClose();
                    }}
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
