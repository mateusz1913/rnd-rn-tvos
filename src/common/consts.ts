import { Dimensions } from 'react-native';

import { margins } from './margins';

export const TILE_SIZE = Dimensions.get('window').height * 0.4 + 2 * margins.MEDIUM;
