import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { AppNavigator } from './src/presentation/routes/AppNavigator';
import { SurveyProvider } from './src/context/SurveyContext';
import { FormProvider } from './src/context/FormContext';

export const App = ()  => {
  return (
    <SurveyProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </SurveyProvider>
  )
}