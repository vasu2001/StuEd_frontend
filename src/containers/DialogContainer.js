import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';

export default (DialogContainer = ({visible, children, cancel}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={cancel}
      hardwareAccelerated>
      <View style={styles.backdrop}>
        <View style={styles.dialog}>{children}</View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialog: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
  },
});
