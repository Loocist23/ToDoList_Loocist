import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const TodoDetailsModal = ({ isVisible, onClose, todo, onEdit, onDelete }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Détail: {todo.text}</Text>
                    <Button title="Modifier" onPress={() => onEdit(todo.id)} />
                    <Button title="Supprimer" onPress={() => onDelete(todo.id)} />
                    <Button title="Fermer" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default TodoDetailsModal;
