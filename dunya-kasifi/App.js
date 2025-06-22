import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { AvatarProvider } from './context/AvatarContext';
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['ViewPropTypes']);

export default function App() {
  return (
    <AvatarProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AvatarProvider>
  );
}
