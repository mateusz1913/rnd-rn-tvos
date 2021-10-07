import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import FlatListExample from '../screens/FlatList';
import Home from '../screens/Home';
import ModalExample from '../screens/Modal';
import SectionListExample from '../screens/SectionList';

import { ROUTES } from './routes';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.FLATLIST} component={FlatListExample} />
      <Stack.Screen name={ROUTES.MODAL} component={ModalExample} />
      <Stack.Screen name={ROUTES.SECTIONLIST} component={SectionListExample} />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default Navigation;
