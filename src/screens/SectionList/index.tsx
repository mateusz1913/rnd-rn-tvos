import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../../common/styles';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

import { styles } from './styles';

const DATA = Array(4).fill(1).map((_, sectionIndex) => ({
  header: `Section ${sectionIndex}`,
  data: Array(6).fill(1).map((_, itemIndex) => ({
    name: `Picture ${`${sectionIndex}`.padStart(2, '0')}.${`${itemIndex}`.padStart(2, '0')}`,
    url: `https://picsum.photos/seed/${sectionIndex}-${itemIndex}/250/300`, 
  })),
}));

const SectionListExample: React.FC = () => {
  const isFocused = useIsFocused();

  return <SafeAreaView style={commonStyles.screenContainer}>
    <Header title="SectionList" />
    <SectionList
      sections={DATA}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        return <ListItem imageUrl={item.url} isTVSelectable={isFocused} />;
      }}
      renderSectionHeader={({ section }) => {
        return <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderTitle}>{section.header}</Text>
        </View>;
      }}
      contentContainerStyle={styles.contentContainer}
      horizontal={true}
    />
  </SafeAreaView>;
};

export default SectionListExample;
