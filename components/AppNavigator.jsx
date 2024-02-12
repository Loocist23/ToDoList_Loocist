//AppNavigator.jsx
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { useSettings } from '../context/SettingContext';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    const { isDarkMode } = useSettings();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerStyle: {
                    backgroundColor: isDarkMode ? '#333' : '#fff',
                },
                headerTintColor: isDarkMode ? '#fff' : '#000',
                tabBarStyle: {
                    backgroundColor: isDarkMode ? '#333' : '#fff',
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
            />
        </Tab.Navigator>
    );
};

export default AppNavigator;
