import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { FormPage1 } from '../screens/forms/chapters/cap1/FormPage1';
import { FormPage2 } from '../screens/forms/chapters/cap1/FormPage2';
import { FormPage3 } from '../screens/forms/chapters/cap2/FormPage3';
import { FormPage4 } from '../screens/forms/chapters/cap3/FormPage4';
import { FormPage5 } from '../screens/forms/chapters/cap3/FormPage5';
import { FormPage6 } from '../screens/forms/chapters/cap5/FormPage6';
import { FormPage7 } from '../screens/forms/chapters/cap5/FormPage7';
import { FormPage8 } from '../screens/forms/chapters/cap5/FormPage8';
import { FormPage9 } from '../screens/forms/chapters/cap5/FormPage9';
import { FormPage10 } from '../screens/forms/chapters/cap5/FormPage10';
import { SurveyProcessor } from '../screens/forms/post/SurveyList';
const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false,
      headerStyle:{
        elevation: 0,
        shadowColor: 'transparent',
      },
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SurveyList" component={SurveyProcessor} />
      <Stack.Screen name="page1" component={FormPage1} />
      <Stack.Screen name="page2" component={FormPage2} />
      <Stack.Screen name="page3" component={FormPage3} />
      <Stack.Screen name="page4" component={FormPage4} />
      <Stack.Screen name="page5" component={FormPage5} />
      <Stack.Screen name="page6" component={FormPage6} />
      <Stack.Screen name="page7" component={FormPage7} />
      <Stack.Screen name="page8" component={FormPage8} />
      <Stack.Screen name="page9" component={FormPage9} />
      <Stack.Screen name="page10" component={FormPage10} />
    </Stack.Navigator>
  );
}