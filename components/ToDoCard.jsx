import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToDoCard = ({ todo }) => {
    return (
        <View style={styles.card}>
            <Text>{todo}</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        backgroundColor: '#fff',
        // Autres styles pour la carte
    }
    // Autres styles si nécessaire
});

export default ToDoCard;
