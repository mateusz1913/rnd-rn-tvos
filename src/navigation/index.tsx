import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AsyncStorageExample from '../screens/AsyncStorage';
import FileAccessExample from '../screens/FileAccess';
import FlatListExample from '../screens/FlatList';
import Home from '../screens/Home';
import ModalExample from '../screens/Modal';
import ReanimatedExample from '../screens/Reanimated';
import SectionListExample from '../screens/SectionList';
import TVEventHandlerExample from '../screens/TVEventHandler';
import TextInputExample from '../screens/TextInput';
import VideoExample from '../screens/Video';

import { ROUTES } from './routes';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.ASYNCSTORAGE} component={AsyncStorageExample} />
      <Stack.Screen name={ROUTES.FILEACCESS} component={FileAccessExample} />
      <Stack.Screen name={ROUTES.FLATLIST} component={FlatListExample} />
      <Stack.Screen name={ROUTES.MODAL} component={ModalExample} />
      <Stack.Screen name={ROUTES.REANIMATED} component={ReanimatedExample} />
      <Stack.Screen name={ROUTES.SECTIONLIST} component={SectionListExample} />
      <Stack.Screen name={ROUTES.TEXTINPUT} component={TextInputExample} />
      <Stack.Screen name={ROUTES.TVEVENTHANDLER} component={TVEventHandlerExample} />
      <Stack.Screen name={ROUTES.VIDEO} component={VideoExample} />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default Navigation;
