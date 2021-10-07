import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../../common/styles';
import Button from '../../components/Button';
import Header from '../../components/Header';

import { styles } from './styles';

const ModalExample: React.FC = () => {
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  function closeModal() {
    setIsModalVisible(false);
  }

  function openModal() {
    setIsModalVisible(true);
  }

  return <SafeAreaView style={commonStyles.screenContainer}>
    <Header title="Modal" />
    <View style={commonStyles.screenContainer}>
      <Button
        isTVSelectable={!isModalVisible}
        onPress={openModal}
        title="Try modal"
      />
    </View>
    <Modal
      animationType="slide"
      onDismiss={closeModal}
      onRequestClose={closeModal}
      style={[ commonStyles.screenContainer, styles.modal ]}
      transparent={true}
      visible={isModalVisible}
    >
      <View style={styles.modalPadding} />
      <View style={[ commonStyles.screenContainer, styles.modalContainerWrapper, styles.modal ]}>
        <View style={styles.modalPadding} />
        <View style={styles.modalContainer}>
          <Button
            isTVSelectable={isModalVisible}
            onPress={closeModal}
            title="Close modal"
          />
        </View>
        <View style={styles.modalPadding} />
      </View>
      <View style={styles.modalPadding} />
    </Modal>
  </SafeAreaView>;
};

export default ModalExample;
