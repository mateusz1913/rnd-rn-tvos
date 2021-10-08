import React from 'react';
import { ImageBackground, Pressable, View } from 'react-native';

import { commonStyles } from '../../common/styles';

interface Props {
  imageUrl: string;
  isTVSelectable?: boolean;
}

const ListItem: React.FC<Props> = ({ imageUrl, isTVSelectable }) => {
  return <Pressable
    isTVSelectable={isTVSelectable}
    style={commonStyles.listItemButton}
    tvParallaxProperties={{ magnification: 1.2, pressMagnification: 1.5 }}
  >
    {({ focused }) => <ImageBackground
      imageStyle={commonStyles.listItemBackground}
      source={{ uri: imageUrl }}
      style={commonStyles.listItem}
    >
      <View style={[ commonStyles.overlay, focused && commonStyles.overlayFocused ]} />
    </ImageBackground>}
  </Pressable>;
};

export default ListItem;
