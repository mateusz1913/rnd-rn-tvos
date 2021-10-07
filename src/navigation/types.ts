import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { ROUTES } from './routes';

export type RootStackParamList = {
  [ROUTES.FLATLIST]: undefined;
  [ROUTES.HOME]: undefined;
  [ROUTES.MODAL]: undefined;
  [ROUTES.SECTIONLIST]: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
