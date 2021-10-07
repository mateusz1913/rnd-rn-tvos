import React from 'react';
import { Text, View } from 'react-native';

import '../patch-tvos-types.d';

const App: React.FC = () => {
  return <View>
    <Text>ABCD</Text>
  </View>;
};

export default App;
