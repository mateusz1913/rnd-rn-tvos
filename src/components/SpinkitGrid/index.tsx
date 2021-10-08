import React from 'react';
import { useEffect } from 'react';
import { PixelRatio } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { theme } from '../../common/theme';

import { styles } from './styles';

interface CubeProps {
  index: number;
}

const SIZE = 300 / PixelRatio.get();

const Cube: React.FC<CubeProps> = ({ index }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    const delay = index % 3 * 100 + 200 - Math.floor(index / 3) * 100;

    progress.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.sin) }),
        -1,
        false,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: theme.primary,
      height: SIZE / 3,
      transform: [{ scale: interpolate(progress.value, [ 0, 0.35, 0.7, 1 ], [ 1, 0.01, 1, 1 ]) }],
      width: SIZE / 3,
    };
  });

  return <Animated.View style={animatedStyle} />;
};

const CUBES_ARR = Array(9).fill(1);

const Grid: React.FC = () => {
  return <Animated.View style={[ styles.container, { height: SIZE, width: SIZE }]}>
    {CUBES_ARR.map((_, i) => <Cube key={i} index={i} />)}
  </Animated.View>;
};

export default Grid;
