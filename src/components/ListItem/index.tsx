import React from 'react';
import { ImageBackground, Pressable } from 'react-native';

import { commonStyles } from '../../common/styles';

interface Props {
  imageUrl: string;
  isTVSelectable?: boolean;
}

const ListItem: React.FC<Props> = ({ imageUrl, isTVSelectable }) => {
  return <Pressable
    isTVSelectable={isTVSelectable}
    style={({ focused } ) => [ commonStyles.listItemButton, focused && commonStyles.listItemButtonFocused ]}
    tvParallaxProperties={{ magnification: 1.2, pressMagnification: 1.5 }}
  >
    <ImageBackground
      imageStyle={commonStyles.listItemBackground}
      source={{ uri: imageUrl }}
      style={commonStyles.listItem}
    />
  </Pressable>;
};

export default ListItem;
