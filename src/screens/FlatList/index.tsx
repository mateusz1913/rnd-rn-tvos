import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../../common/styles';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

import { styles } from './styles';

const DATA = Array(30).fill(1).map((_, index) => ({
  name: `Picture ${index}`,
  url: `https://picsum.photos/seed/${index}/150/200`,
}));

const FlatListExample: React.FC = () => {
  const isFocused = useIsFocused();

  return <SafeAreaView style={commonStyles.screenContainer}>
    <Header title="FlatList" />
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        return <ListItem imageUrl={item.url} isTVSelectable={isFocused} />;
      }}
      numColumns={3}
      contentContainerStyle={styles.contentContainer}
    />
  </SafeAreaView>;
};

export default FlatListExample;
