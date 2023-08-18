import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TextInputProps} from 'react-native-paper';
type IProps = {
  inputLabel: string;
};
const Input = (props: TextInputProps & IProps) => {
  const {label, ...otherProps} = props;
  return (
    <View>
      <Text>{props.inputLabel}</Text>
      <TextInput
        {...otherProps}
        underlineStyle={{borderWidth: 0}}
        underlineColor="transparent"
        outlineStyle={{borderWidth: 0}}
        outlineColor="transparent"
        style={styles.input}
        textColor="#707374"
        placeholderTextColor={'#b1b9be'}
        theme={theme}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f6f8fe',
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 12,
    marginTop: 12,
  },
  label: {
    color: '#969ea3',
  },
});
const theme = {
  colors: {primary: 'transparent'},
  roundness: 0,
  animation: {scale: 0},
};

export default Input;
