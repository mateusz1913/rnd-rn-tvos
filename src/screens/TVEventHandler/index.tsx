import React, { useEffect, useState } from 'react';
import { Pressable, TVEventHandler, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../../common/styles';
import Header from '../../components/Header';

import { styles } from './styles';

const TVEventHandlerExample: React.FC = () => {
  const [ tvEvent, setTvEvent ] = useState('');
  const [ isSelected, setIsSelected ] = useState('');

  useEffect(() => {
    const handler = new TVEventHandler();

    handler.enable(undefined, (_, event) => {
      if ([ 'swipeLeft', 'left' ].includes(event.eventType)) {
        setIsSelected('left');
      } else if ([ 'swipeRight', 'right' ].includes(event.eventType)) {
        setIsSelected('right');
      } else if ([ 'swipeUp', 'up' ].includes(event.eventType)) {
        setIsSelected('up');
      } else if ([ 'swipeDown', 'down' ].includes(event.eventType)) {
        setIsSelected('down');
      } else if ([ 'select' ].includes(event.eventType)) {
        setIsSelected('select');
      } else {
        setIsSelected('');
      }

      setTvEvent(JSON.stringify(event));
    });
    return () => {
      handler.disable();
    };
  }, []);
  return <SafeAreaView style={commonStyles.screenContainer}>
    <Header title="TVEventHandler" />
    {/** To trigger events on Android TV, there should be at least one focusable element on screen */}
    <Pressable style={commonStyles.emptyPressable} />
    <View style={commonStyles.screenContainer}>
      <Text style={styles.event}>{tvEvent}</Text>
      <View style={styles.row}>
        <View style={styles.button} />
        <View style={[ styles.button, isSelected === 'up' && styles.selectedButton ]}>
          <Text style={[ styles.text, { transform: [{ rotate: '90deg' }]}]}>{'<'}</Text>
        </View>
        <View style={styles.button} />
      </View>
      <View style={styles.row}>
        <View style={[ styles.button, isSelected === 'left' && styles.selectedButton ]}>
          <Text style={styles.text}>{'<'}</Text>
        </View>
        <View style={[ styles.button, isSelected === 'select' && styles.selectedButton ]} />
        <View style={[ styles.button, isSelected === 'right' && styles.selectedButton ]}>
          <Text style={styles.text}>{'>'}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.button} />
        <View style={[ styles.button, isSelected === 'down' && styles.selectedButton ]}>
          <Text style={[ styles.text, { transform: [{ rotate: '90deg' }]}]}>{'>'}</Text>
        </View>
        <View style={styles.button} />
      </View>
    </View>
  </SafeAreaView>;
};

export default TVEventHandlerExample;
