import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import DialogContainer from '../containers/DialogContainer';

export default (ConfirmDialog = ({text, callback, visible, cancel}) => {
  return (
    <DialogContainer visible={visible} cancel={cancel}>
      <Text style={styles.dialogText}>{text}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button title="No" onPress={cancel} />
        <Button
          title="Yes"
          onPress={() => {
            callback();
            cancel();
          }}
        />
      </View>
    </DialogContainer>
  );
});

const styles = StyleSheet.create({
  dialogText: {
    fontSize: 25,
    margin: 10,
    paddingBottom: 10,
  },
});
