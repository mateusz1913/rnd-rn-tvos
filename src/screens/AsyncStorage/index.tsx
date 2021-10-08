import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import { LogBox, Platform, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../../common/styles';
import Header from '../../components/Header';

import { styles } from './styles';

const WARNING_TVOS_MSG = 'Persistent storage is not supported on tvOS, your data may be removed at any point.';

LogBox.ignoreLogs([ WARNING_TVOS_MSG ]);

const KEY = 'AsyncStorageKey';

const AsyncStorageExample: React.FC = () => {
  const textInputRef = useRef<TextInput>(null);
  const [ textInput, setTextInput ] = useState('');

  function getValue() {
    AsyncStorage.getItem(KEY)
      .then((value) => {
        setTextInput(value ?? '');
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  function setValue(value: string) {
    AsyncStorage.setItem(KEY, value)
      .catch((err) => {
        console.warn(err);
      });
  }

  useEffect(() => {
    getValue();
  }, []);

  return <SafeAreaView style={commonStyles.screenContainer}>
    <Header title="AsyncStorage" />
    <View style={commonStyles.screenContainer}>
      {Platform.OS === 'ios' && Platform.isTV && <Text style={styles.warningText}>{WARNING_TVOS_MSG}</Text>}
      <Text style={styles.savedText}>Saved value: {textInput}</Text>
      <Pressable
        onPress={() => {
          textInputRef.current?.focus();
        }}
        style={({ focused }) => [ styles.inputWrapper, focused && styles.inputFocusedWrapper ]}>
        <TextInput
          ref={textInputRef}
          autoCorrect={false}
          onChangeText={setTextInput}
          onSubmitEditing={(e) => {
            setValue(e.nativeEvent.text);
            textInputRef.current?.blur();
          }}
          placeholder="Write text"
          style={styles.input}
          value={textInput}
        />
      </Pressable>
    </View>
  </SafeAreaView>;
};

export default AsyncStorageExample;
