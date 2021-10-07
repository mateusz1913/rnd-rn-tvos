import { Platform } from 'react-native';

export const fontFamilies = {
  SANS_SERIF: Platform.select({
    ios: 'Avenir',
    android: 'sans-serif',
  }),
};

export const fontSizes = {
  SMALL: 36 as const,
  MEDIUM: 48 as const,
  LARGE: 60 as const,
};
