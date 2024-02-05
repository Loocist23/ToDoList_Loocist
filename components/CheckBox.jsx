import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Checkbox = ({ onCheckChange, isChecked }) => {
  const [checked, setChecked] = useState(isChecked);

  const toggleCheckbox = () => {
    const newState = !checked;
    setChecked(newState);
    onCheckChange(newState);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
      {checked && <Text>✔</Text>}
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
  innerCheckbox: {
    height: 10,
    width: 10
  },
});

export default Checkbox;
