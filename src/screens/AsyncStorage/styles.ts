import { StyleSheet } from 'react-native';

import { borderRadii } from '../../common/borderRadii';
import { fontFamilies, fontSizes } from '../../common/fonts';
import { margins } from '../../common/margins';
import { theme } from '../../common/theme';

export const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    backgroundColor: theme.background,
    borderColor: theme.text,
    borderRadius: borderRadii.LARGE,
    borderWidth: 3,
    color: theme.text,
    fontSize: fontSizes.LARGE,
    margin: margins.MEDIUM,
    padding: margins.SMALL,
  },
  inputFocusedWrapper: {
    backgroundColor: '#00D56333',
  },
  inputWrapper: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
  savedText: {
    color: theme.text,
    fontFamily: fontFamilies.SANS_SERIF,
    fontSize: fontSizes.MEDIUM,
    textAlign: 'center',
  },
  warningText: {
    color: 'orange',
    fontFamily: fontFamilies.SANS_SERIF,
    fontSize: fontSizes.SMALL,
    margin: margins.SMALL,
    textAlign: 'center',
  },
});
