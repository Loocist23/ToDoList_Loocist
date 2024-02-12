//SettingsScreen.jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { useSettings } from '../context/SettingContext';

const SettingsScreen = () => {
  const { completedTodoTextColor, updateCompletedTodoTextColor, isDarkMode, toggleDarkMode } = useSettings();
  const initialColor = hexToRgb(completedTodoTextColor);

  const [color, setColor] = useState(initialColor);
  const [modalVisible, setModalVisible] = useState(false);

  const colorHex = `#${Object.values(color).map(v => v.toString(16).padStart(2, '0')).join('')}`;

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { red: r, green: g, blue: b };
  }

  const handleSliderChange = (colorValue, colorName) => {
    const newColor = { ...color, [colorName]: Math.round(colorValue) };
    setColor(newColor);
    updateCompletedTodoTextColor(`#${Object.values(newColor).map(v => v.toString(16).padStart(2, '0')).join('')}`);
  };

  // Styles conditionnels en fonction du mode sombre ou clair
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
      backgroundColor: isDarkMode ? '#333' : '#FFF', // Arrière-plan différent en fonction du thème
    },
    text: {
      color: isDarkMode ? '#FFF' : '#333', // Texte différent en fonction du thème
    },
    modalView: {
      margin: 20,
      backgroundColor: isDarkMode ? '#555' : 'white',
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
      elevation: 5,
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <TouchableOpacity
        style={[styles.colorPreview, { backgroundColor: colorHex }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={dynamicStyles.text}>Change Color</Text>
      </TouchableOpacity>

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleDarkMode}
        value={isDarkMode}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={dynamicStyles.modalView}>
            <Text style={dynamicStyles.text}>Change Completed Todo Text Color</Text>
            <View style={[styles.colorPreview, { backgroundColor: colorHex }]}>
              <Text style={dynamicStyles.text}>{colorHex}</Text>
            </View>
            {['red', 'green', 'blue'].map((colorName) => (
              <View key={colorName} style={styles.sliderContainer}>
                <Text style={dynamicStyles.text}>{colorName.toUpperCase()}: {color[colorName]}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={255}
                  step={1}
                  value={color[colorName]}
                  onValueChange={value => handleSliderChange(value, colorName)}
                  maximumTrackTintColor="#000000"
                  minimumTrackTintColor="#FFFFFF"
                />
              </View>
            ))}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={dynamicStyles.text}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles qui ne changent pas dynamiquement
const styles = StyleSheet.create({
  colorPreview: {
    height: 50,
    width: 70,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    width: '100%',
    marginVertical: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

export default SettingsScreen;
