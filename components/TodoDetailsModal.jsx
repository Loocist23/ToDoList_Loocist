import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoDetailsModal = ({ isVisible, onClose, todo, onEdit, onDelete }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Title: {todo.title}</Text>
                    <Text style={styles.modalText}>Description: {todo.description || "Vide"}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => onEdit(todo.id)}>
                        <Text style={styles.buttonText}>Modifier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => onDelete(todo.id)}>
                        <Text style={styles.buttonText}>Supprimer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>Fermer</Text>
                    </TouchableOpacity>
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
    },
    button: {
        backgroundColor: "#2196F3",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        width: 100,
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold"
    }
});

export default TodoDetailsModal;