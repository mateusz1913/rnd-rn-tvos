import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './styles';

interface Props {
  hasTVPreferredFocus?: boolean;
  isTVSelectable?: boolean;
  onPress: () => void;
  title: string;
}

const Button: React.FC<Props> = ({ hasTVPreferredFocus, isTVSelectable, onPress, title }) => {
  const isFocused = useIsFocused();

  return <Pressable
    hasTVPreferredFocus={hasTVPreferredFocus}
    isTVSelectable={isTVSelectable === undefined ? isFocused : isTVSelectable}
    onPress={onPress}
    style={({ focused }) => [ styles.button, focused && styles.focusedButton ]}
    tvParallaxProperties={{ magnification: 1.3 }}>
    {({ focused }) => <Text style={[ styles.title, focused && styles.focusedTitle ]}>
      {title}
    </Text>}
  </Pressable>;
};

export default Button;
