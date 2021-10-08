import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../../common/styles';
import Header from '../../components/Header';
import Grid from '../../components/SpinkitGrid';

const ReanimatedExample: React.FC = () => {
  return <SafeAreaView style={commonStyles.screenContainer}>
    <Header title="Reanimated" />
    <View style={commonStyles.screenContainer}>
      <Grid />
    </View>
  </SafeAreaView>;
};

export default ReanimatedExample;
