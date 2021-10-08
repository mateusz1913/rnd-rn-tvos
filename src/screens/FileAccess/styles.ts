import { StyleSheet } from 'react-native';

import { fontFamilies, fontSizes } from '../../common/fonts';
import { margins } from '../../common/margins';
import { theme } from '../../common/theme';

export const styles = StyleSheet.create({
  label: {
    color: theme.text,
    flex: 1,
    fontFamily: fontFamilies.SANS_SERIF,
    fontSize: fontSizes.SMALL,
    padding: margins.SMALL,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: margins.SMALL,
  },
  scrollView: {
    alignSelf: 'stretch',
  },
  value: {
    color: theme.primary,
    flex: 4,
    fontFamily: fontFamilies.SANS_SERIF,
    fontSize: fontSizes.SMALL,
    padding: margins.SMALL,
  },
});