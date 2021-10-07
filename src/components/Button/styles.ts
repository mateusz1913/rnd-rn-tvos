import { StyleSheet } from 'react-native';

import { borderRadii } from '../../common/borderRadii';
import { fontFamilies, fontSizes } from '../../common/fonts';
import { margins } from '../../common/margins';
import { theme } from '../../common/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.background,
    borderColor: theme.primary,
    borderRadius: borderRadii.LARGE,
    borderWidth: 3,
    elevation: 2.5,
    margin: margins.SMALL,
    padding: margins.MEDIUM,
    shadowColor: theme.text,
    shadowOffset: { width: 0, height: 2.5 },
    shadowOpacity: 0.72,
    shadowRadius: 2.2,
    width: '66%',
  },
  focusedButton: {
    backgroundColor: theme.primary,
  },
  focusedTitle: {
    color: theme.background,
  },
  title: {
    color: theme.text,
    fontFamily: fontFamilies.SANS_SERIF,
    fontSize: fontSizes.SMALL,
  },
});
