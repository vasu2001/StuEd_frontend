import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet} from 'react-native';
import DialogContainer from '../containers/DialogContainer';
import Snackbar from 'react-native-snackbar';

export default (InputDialog = ({
  visible,
  cancel,
  callback,
  text,
  inputType,
  validator,
}) => {
  const [inputText, setInputText] = useState('');

  return (
    <DialogContainer visible={visible} cancel={cancel}>
      <TextInput
        placeholder={text}
        style={styles.modalfield}
        placeholderTextColor="#7A898B"
        keyboardType={inputType}
        underlineColorAndroid={'black'}
        value={inputText}
        onChangeText={text => setInputText(text)}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button title="Close" onPress={cancel} />
        <Button
          title="Save"
          onPress={() => {
            if (validator(text)) {
              callback(inputText);
              cancel();
            } else
              Snackbar.show({
                text: 'Enter a valid details',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: '#7785AC',
              });
          }}
        />
      </View>
    </DialogContainer>
  );
});

const styles = StyleSheet.create({
  modalfield: {
    margin: 10,
    fontSize: 30,
  },
});
