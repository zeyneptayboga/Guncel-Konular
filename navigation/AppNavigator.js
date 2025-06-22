import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import AvatarScreen from '../screens/AvatarScreen';
import EquipmentScreen from '../screens/EquipmentScreen';
import MapScreen from '../screens/MapScreen';
import CountryGameScreen from '../screens/CountryGameScreen';
import PassportScreen from '../screens/PassportScreen';
import SummaryScreen from '../screens/SummaryScreen';
import CategoryQuizScreen from '../screens/CategoryQuizScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: { backgroundColor: '#3498db' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Avatar"
        component={AvatarScreen}
        options={{ title: '🧑 Avatarını Oluştur' }}
      />
      <Stack.Screen
        name="Equipment"
        component={EquipmentScreen}
        options={{ title: '🧳 Ekipman Seçimi' }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: '🌍 Dünya Haritası' }}
      />
      <Stack.Screen
        name="CountryGame"
        component={CountryGameScreen}
        options={{ title: '🗺️ Görevler' }}
      />
      <Stack.Screen
        name="Passport"
        component={PassportScreen}
        options={{ title: '🛂 Pasaportum' }}
      />
      <Stack.Screen
        name="Summary"
        component={SummaryScreen}
        options={{ title: '📖 Macera Özeti' }}
      />
      <Stack.Screen
        name="CategoryQuiz"
        component={CategoryQuizScreen}
        options={{ title: '🧠 Mini Quiz' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
