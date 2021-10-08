import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../../common/styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { ROUTES } from '../../navigation/routes';
import type { RootStackNavigationProp } from '../../navigation/types';

import { styles } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return <SafeAreaView style={commonStyles.screenContainer}>
    <Header title="Home" />
    <ScrollView
      contentContainerStyle={styles.scrollContentContainer}
      fadingEdgeLength={20}
      style={styles.scrollView}>
      <Button
        onPress={() => {
          navigation.navigate(ROUTES.FLATLIST);
        }}
        title="FlatList Example"
      />
      <Button
        onPress={() => {
          navigation.navigate(ROUTES.MODAL);
        }}
        title="Modal Example"
      />
      <Button
        onPress={() => {
          navigation.navigate(ROUTES.SECTIONLIST);
        }}
        title="SectionList Example"
      />
      <Button
        onPress={() => {
          navigation.navigate(ROUTES.TEXTINPUT);
        }}
        title="TextInput Example"
      />
      <Button
        onPress={() => {
          navigation.navigate(ROUTES.TVEVENTHANDLER);
        }}
        title="TVEventHandler Example"
      />
    </ScrollView>
  </SafeAreaView>;
};

export default Home;
