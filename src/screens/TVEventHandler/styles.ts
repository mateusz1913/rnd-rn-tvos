import { StyleSheet } from 'react-native';

import { borderRadii } from '../../common/borderRadii';
import { fontFamilies, fontSizes } from '../../common/fonts';
import { margins } from '../../common/margins';
import { theme } from '../../common/theme';

const BUTTON_SIZE = 60;

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.background,
    borderColor: theme.primary,
    borderRadius: borderRadii.EXTRA_LARGE,
    borderWidth: 1,
    height: BUTTON_SIZE,
    justifyContent: 'center',
    margin: margins.LARGE,
    padding: margins.SMALL,
    width: BUTTON_SIZE,
  },
  event: {
    color: theme.text,
    fontFamily: fontFamilies.SANS_SERIF,
    fontSize: fontSizes.SMALL,
  },
  row: {
    flexDirection: 'row',
  },
  selectedButton: {
    backgroundColor: theme.primary,
  },
  text: {
    color: theme.text,
    fontFamily: fontFamilies.SANS_SERIF,
    fontSize: fontSizes.SMALL,
    textAlign: 'center',
  },
});
