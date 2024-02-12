//SettingContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

const SettingsProvider = ({ children }) => {
    const [completedTodoTextColor, setCompletedTodoTextColor] = useState('#00FF00'); // Couleur par défaut
    const [isDarkMode, setIsDarkMode] = useState(false); // Mode sombre désactivé par défaut

    // Charger les paramètres au démarrage de l'application
    useEffect(() => {
        const loadSettings = async () => {
            const storedColor = await AsyncStorage.getItem('completedTodoTextColor');
            const storedDarkMode = await AsyncStorage.getItem('isDarkMode');

            if (storedColor) {
                setCompletedTodoTextColor(storedColor);
            }
            if (storedDarkMode !== null) {
                setIsDarkMode(JSON.parse(storedDarkMode));
            }
        };

        loadSettings();
    }, []);

    const updateCompletedTodoTextColor = async (colorHex) => {
        setCompletedTodoTextColor(colorHex);
        await AsyncStorage.setItem('completedTodoTextColor', colorHex);
    };

    const toggleDarkMode = async () => {
        setIsDarkMode(!isDarkMode);
        await AsyncStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
    };

    return (
        <SettingsContext.Provider value={{
            completedTodoTextColor,
            updateCompletedTodoTextColor,
            isDarkMode,
            toggleDarkMode
        }}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;
