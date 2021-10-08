import React, { useRef, useState } from 'react';
import { Pressable } from 'react-native';
import { TextInput, View, findNodeHandle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../../common/styles';
import Header from '../../components/Header';

import { styles } from './styles';

const TextInputExample: React.FC = () => {
  const numberInputRef = useRef<TextInput>(null);
  const textInputRef = useRef<TextInput>(null);
  const [ textInput, setTextInput ] = useState('');
  const [ numberInput, setNumberInput ] = useState('');

  return <SafeAreaView style={commonStyles.screenContainer}>
    <Header title="TextInput" />
    <View style={commonStyles.screenContainer}>
      <Pressable
        onPress={() => {
          textInputRef.current?.focus();
        }}
        style={({ focused }) => [ styles.inputWrapper, focused && styles.inputFocusedWrapper ]}>
        <TextInput
          ref={textInputRef}
          autoCorrect={false}
          nextFocusDown={findNodeHandle(numberInputRef.current) ?? undefined}
          onChangeText={setTextInput}
          onSubmitEditing={() => {
            textInputRef.current?.blur();
          }}
          placeholder="Write text"
          style={styles.input}
          value={textInput}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          numberInputRef.current?.focus();
        }}
        style={({ focused }) => [ styles.inputWrapper, focused && styles.inputFocusedWrapper ]}>
        <TextInput
          ref={numberInputRef}
          autoCorrect={false}
          keyboardType="number-pad"
          nextFocusUp={findNodeHandle(textInputRef.current) ?? undefined}
          onChangeText={setNumberInput}
          onSubmitEditing={() => {
            numberInputRef.current?.blur();
          }}
          placeholder="Write numbers"
          style={styles.input}
          value={numberInput}
        />
      </Pressable>
    </View>
  </SafeAreaView>;
};

export default TextInputExample;
