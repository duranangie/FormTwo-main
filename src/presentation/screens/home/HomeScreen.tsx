import React, { useEffect, useContext } from 'react';
import { Text, View, Image, ImageStyle } from 'react-native';
import { MainButton } from '../../components/shared/MainButton';
import { globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { generateId } from '../../../utils/generateId';
import { SurveyContext } from '../../../context/SurveyContext';
import { UseSaveData } from '../../hooks/UseSaveData';
import RNFS from 'react-native-fs';


export const HomeScreen = () => {
  const navigation = useNavigation();
  const { setSurveyId } = useContext(SurveyContext);
  const { postNewSurvey } = UseSaveData();

  let now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const fileName = `${year}-${month}-${day}`;

  const directoryPath = RNFS.DocumentDirectoryPath; 

  const styles = {
    logo: {
      width: 200,
      height: 200,
      resizeMode: 'contain' as 'contain', // Asegúrate de que sea uno de los valores válidos
      alignSelf: 'center' as const, // Usar 'as const' para asegurar que sea del tipo correcto
      marginBottom: 10,
    } as ImageStyle, // Asegúrate de que el estilo cumpla con ImageStyle
  };


  const handleNewSurvey = async () => {
    const newSurveyId = generateId();
    setSurveyId(newSurveyId);
    console.log("Generated Survey ID:", newSurveyId);
    await postNewSurvey(`${fileName}.json`, newSurveyId);
    navigation.navigate('page1' as never);
  };

  return (

    <View style={globalStyles.HomeScreenContainer}>
      <Image
        style={styles.logo}
        source={require('../../../assets/OIP.png')}
      />
      <MainButton label='Nueva encuesta' onPress={handleNewSurvey} />
      <MainButton label='Procesar encuestas' onPress={() => navigation.navigate('SurveyList' as never)} />
    </View>
  );
};
