import { StyleSheet } from 'react-native';

import { fontFamilies, fontSizes } from '../../common/fonts';
import { margins } from '../../common/margins';
import { theme } from '../../common/theme';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    margin: margins.MEDIUM,
  },
  title: {
    color: theme.primary,
    fontFamily: fontFamilies.SANS_SERIF,
    fontSize: fontSizes.LARGE,
  },
});
