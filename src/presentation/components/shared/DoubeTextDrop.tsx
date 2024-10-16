import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../../theme/theme';

interface YesNoInputProps {
  questionTitle: string;
  selectedAnswer: string;
  onAnswerChange: (value: string) => void;
  subQuestion1: string;
  subQuestion2: string;
  answer1: string;
  answer2: string;
  onAnswer1Change: (value: string) => void;
  onAnswer2Change: (value: string) => void;
  errors?: any;
  touched?: any;
}

export const YesNoInput = ({
  questionTitle,
  selectedAnswer,
  onAnswerChange,
  subQuestion1,
  subQuestion2,
  answer1,
  answer2,
  onAnswer1Change,
  onAnswer2Change,
  errors,
  touched,
}: YesNoInputProps) => {
  return (
    <View>
      <Text style={globalStyles.questionTitle}>{questionTitle}</Text>
      <View style={globalStyles.picker}>
        <Picker
          selectedValue={selectedAnswer}
          onValueChange={(value) => onAnswerChange(value)}
        >
          <Picker.Item label="Seleccione una opción" value="" />
          <Picker.Item label="Sí" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>
        {errors?.answer && touched?.answer && (
          <Text style={{ color: 'red' }}>{errors.answer}</Text>
        )}
      </View>
      {selectedAnswer === 'yes' && (
        <>
          <Text style={globalStyles.questionTitle}>{subQuestion1}</Text>
          <TextInput
            value={answer1}
            onChangeText={onAnswer1Change}
            placeholder="P25"
            style={globalStyles.input}
            placeholderTextColor='lightgray'
          />
          {errors?.answer1 && touched?.answer1 && (
            <Text style={{ color: 'red' }}>{errors.answer1}</Text>
          )}

          <Text style={globalStyles.questionTitle}>{subQuestion2}</Text>
          <TextInput
            value={answer2}
            onChangeText={onAnswer2Change}
            placeholder="P26"
            style={globalStyles.input}
            placeholderTextColor='lightgray'
          />
          {errors?.answer2 && touched?.answer2 && (
            <Text style={{ color: 'red' }}>{errors.answer2}</Text>
          )}
        </>
      )}
    </View>
  );
};
