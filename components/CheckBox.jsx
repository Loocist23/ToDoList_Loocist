//CheckBox.jsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Checkbox = ({ onCheckChange, isChecked }) => {
  return (
    <TouchableOpacity onPress={onCheckChange} style={styles.checkbox}>
      {isChecked && <Text>✔</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Checkbox;
