import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { ROUTES } from './routes';

export type RootStackParamList = {
  [ROUTES.ASYNCSTORAGE]: undefined;
  [ROUTES.FILEACCESS]: undefined;
  [ROUTES.FLATLIST]: undefined;
  [ROUTES.HOME]: undefined;
  [ROUTES.MODAL]: undefined;
  [ROUTES.REANIMATED]: undefined;
  [ROUTES.SECTIONLIST]: undefined;
  [ROUTES.TEXTINPUT]: undefined;
  [ROUTES.TVEVENTHANDLER]: undefined;
  [ROUTES.VIDEO]: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
