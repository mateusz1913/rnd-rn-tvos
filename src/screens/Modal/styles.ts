import { StyleSheet } from 'react-native';

import { borderRadii } from '../../common/borderRadii';
import { theme } from '../../common/theme';

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'transparent',
  },
  modalContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: theme.background,
    borderColor: theme.primary,
    borderRadius: borderRadii.EXTRA_LARGE,
    borderWidth: 5,
    flex: 0.8,
    justifyContent: 'center',
  },
  modalContainerWrapper: {
    flex: 0.8,
    flexDirection: 'row',
  },
  modalPadding: {
    flex: 0.1,
  },
});
