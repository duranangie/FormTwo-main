import React from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { globalStyles } from '../../theme/theme';

interface Props {
  textTitle: string;
  info: string;
  handleChange: (value: string) => void;  // Cambié aquí para que solo acepte el valor del input
  handleBlur: () => void;  // handleBlur no necesita un argumento aquí
  values: string | string[] | undefined;
}

export const InputComponent = ({ textTitle, info, handleBlur, handleChange, values }: Props) => {

  const stringValue = Array.isArray(values) ? values[0] || '' : values || '';
  
  return (
    <View>
      <Text style={globalStyles.questionTitle}>{textTitle}</Text>
      <TextInput
        onChangeText={handleChange}
        onBlur={handleBlur} 
        value={stringValue}  
        style={globalStyles.input}
        placeholder={info}
        placeholderTextColor="lightgray"
      />
    </View>
  )
}
