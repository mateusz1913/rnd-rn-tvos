import { StyleSheet } from 'react-native';

import { borderRadii } from './borderRadii';
import { TILE_SIZE } from './consts';
import { margins } from './margins';
import { theme } from './theme';

const ITEM_SIZE = TILE_SIZE - 2 * margins.MEDIUM;

export const commonStyles = StyleSheet.create({
  listItem: {
    alignItems: 'center',
    borderRadius: borderRadii.LARGE,
    height: ITEM_SIZE,
    justifyContent: 'center',
    overflow: 'hidden',
    width: ITEM_SIZE,
  },
  listItemBackground: {
    borderRadius: borderRadii.LARGE,
    height: ITEM_SIZE,
    overflow: 'hidden',
    width: ITEM_SIZE,
  },
  listItemButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: borderRadii.LARGE,
    elevation: 2.1,
    height: ITEM_SIZE,
    justifyContent: 'center',
    margin: margins.LARGE,
    shadowColor: theme.text,
    shadowOffset: { width: 0, height: 2.1 },
    shadowOpacity: 0.8,
    shadowRadius: 2.1,
    width: ITEM_SIZE,
    zIndex: 3,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  overlayFocused: {
    backgroundColor: 'transparent',
  },
  screenContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: theme.background,
    flex: 1,
    justifyContent: 'center',
  },
});
