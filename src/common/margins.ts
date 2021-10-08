import { PixelRatio } from 'react-native';

const RATIO = PixelRatio.get();

export const margins = {
  /** 12 / RATIO */
  SMALL: 12 / RATIO,
  /** 24 / RATIO */
  MEDIUM: 24 / RATIO,
  /** 36 / RATIO */
  LARGE: 36 / RATIO,
};
