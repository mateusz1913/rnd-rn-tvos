import { StyleSheet } from 'react-native';

import { borderRadii } from '../../common/borderRadii';
import { fontSizes } from '../../common/fonts';
import { margins } from '../../common/margins';
import { theme } from '../../common/theme';

export const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    backgroundColor: theme.background,
    borderColor: theme.primary,
    borderRadius: borderRadii.EXTRA_LARGE,
    borderWidth: 3,
    color: theme.text,
    fontSize: fontSizes.MEDIUM,
    margin: margins.SMALL,
    padding: margins.MEDIUM,
  },
  inputFocusedWrapper: {
    backgroundColor: '#00D56333',
  },
  inputWrapper: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
});
