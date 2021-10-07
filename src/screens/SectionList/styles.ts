import { StyleSheet } from 'react-native';

import { borderRadii } from '../../common/borderRadii';
import { fontSizes } from '../../common/fonts';
import { margins } from '../../common/margins';
import { theme } from '../../common/theme';

export const styles = StyleSheet.create({
  contentContainer: {
    padding: margins.LARGE,
  },
  sectionHeader: {
    backgroundColor: theme.primary,
    borderRadius: borderRadii.LARGE,
    elevation: 1.3,
    margin: margins.SMALL,
    padding: margins.SMALL,
    shadowColor: theme.text,
    shadowOffset: { width: 0, height: 1.3 },
    shadowOpacity: 0.6,
    shadowRadius: 1.3,
  },
  sectionHeaderTitle: {
    color: theme.background,
    fontSize: fontSizes.MEDIUM,
  },
});
