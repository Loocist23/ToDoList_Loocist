// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import AppNavigator from './components/AppNavigator';
import { TodosProvider } from './context/TodoContext';
import SettingsProvider from './context/SettingContext';

export default function App() {
  return (
    <SettingsProvider>
      <TodosProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <AppNavigator />
            <StatusBar style="auto" />
          </NavigationContainer>
        </SafeAreaView>
      </TodosProvider>
    </SettingsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
