import { StyleSheet } from 'react-native';

import { borderRadii } from '../../common/borderRadii';
import { fontSizes } from '../../common/fonts';
import { margins } from '../../common/margins';
import { theme } from '../../common/theme';

export const styles = StyleSheet.create({
  controlsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'transparent',
    borderRadius: borderRadii.LARGE,
    zIndex: 3,
  },
  text: {
    color: theme.text,
    fontSize: fontSizes.SMALL,
    margin: margins.SMALL,
  },
  videoContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 3,
  },
});