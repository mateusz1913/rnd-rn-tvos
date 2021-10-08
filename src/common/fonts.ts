import { PixelRatio, Platform } from 'react-native';

const RATIO = PixelRatio.get();

export const fontFamilies = {
  SANS_SERIF: Platform.select({
    ios: 'Avenir',
    android: 'sans-serif',
  }),
};

export const fontSizes = {
  /** 36 / RATIO */
  SMALL: 36 / RATIO,
  /** 48 / RATIO */
  MEDIUM: 48 / RATIO,
  /** 60 / RATIO */
  LARGE: 60 / RATIO,
};
