import React from 'react';
import { Text } from 'react-native';

interface ErrorMessageProps {
  errors: any; 
  touched: any; 
  fieldName: string; 
}

export const ErrorIdMessage: React.FC<ErrorMessageProps> = ({ errors, touched, fieldName }) => {
  const fieldErrors = errors?.[fieldName]?.response?.[0]?.idoptresponse;
  const fieldTouched = touched?.[fieldName]?.response?.[0]?.idoptresponse;

  if (Array.isArray(fieldErrors) && Array.isArray(fieldTouched) && fieldErrors[0]) {
    return <Text style={{ color: 'red' }}>{fieldErrors[0]}</Text>;
  }

  return null;
};
