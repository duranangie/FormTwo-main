import { useCallback } from "react"
import { Alert } from "react-native";
import RNFS from 'react-native-fs';
import { FormTemplate } from "../../utils/FormInterfaces";

export const UseSaveData = () => {
        interface SurveyData {
            surveys: Array<{
            nroEnCuesta: string;
            hora: string;
            responses: any[];
            }>;
        }
        const saveAllData = useCallback( async (fileName:string, data: any, surveyId: string) => {
            try {
                const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;
                let currentData: SurveyData = { surveys: [] };


                const fileContent = await RNFS.readFile(path,'utf8');
                currentData = JSON.parse(fileContent);
                const dataEntries = Object.entries(data).map(([key, value]) => ({ key, value: value as FormTemplate }));

                if(Array.isArray(currentData.surveys)) {
                    const surveyIndex = currentData.surveys.findIndex((survey: any) => survey.nroEnCuesta === surveyId);
                    dataEntries.forEach(entry => {
                        const responseIndex = currentData.surveys[surveyIndex].responses.findIndex((response: any) => response.qId === entry.value.qId);
                        if (responseIndex !== -1) {
                          console.log(responseIndex)
                          currentData.surveys[surveyIndex].responses[responseIndex] = entry.value;
                        } else {
                          console.log(responseIndex)
                          currentData.surveys[surveyIndex].responses.push(entry.value);
                        }
                    })
                }
                
                await RNFS.writeFile(path, JSON.stringify(currentData, null, 2), 'utf8');
                Alert.alert(`File ${fileName} updated`)
                    
            } catch (e) {
                console.log('failed to save data',e);
                return false;
            }
        },
        [],);

    const getAllData = useCallback(async (fileName: string) => {
    try {
        const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;
        const fileExists = await RNFS.exists(path);
        if (fileExists) {
        const jsonValue = await RNFS.readFile(path, 'utf8');
        return JSON.parse(jsonValue);
        } else {
        console.log('File does not exist:', path);
        return null;
        }
    } catch (e) {
        console.error('Failed to read file', e);
        return null;
    }
    }, []);

      
      const postNewSurvey = useCallback( async (fileName:string, newSurveyId:string) =>{
          try {
              let now = new Date();
              const year = now.getFullYear();
              const month = String(now.getMonth() + 1).padStart(2, '0');
              const day = String(now.getDate()).padStart(2, '0');
              const date = `${year}-${month}-${day}`;
              const hours = String(now.getHours());

              const path = `${RNFS.DocumentDirectoryPath}/${fileName}`;
              let currentData: SurveyData = { surveys: [] }; // Inicializa con una estructura válida
              const fileExists = await RNFS.exists(path);
              const newSurvey = {
                  nroEnCuesta: newSurveyId, 
                  fecha: date,
                  hora: hours, 
                  responses: []
              };
              console.log('Time Zone:', Intl.DateTimeFormat().resolvedOptions().timeZone);

              if(fileExists){
                  const fileContent = await RNFS.readFile(path, 'utf8');
                  currentData = JSON.parse(fileContent) as SurveyData;
      
                  if (Array.isArray(currentData.surveys)) {
                      currentData.surveys.push(newSurvey);
                  } else {
                      currentData.surveys = [newSurvey];
                  }
      
                  await RNFS.writeFile(path, JSON.stringify(currentData, null, 2), 'utf8');
                  Alert.alert(`File ${fileName} updated`);
              } else {
                  const newData: SurveyData = {
                      surveys: [newSurvey]
                  };
                  const jsonValue = JSON.stringify(newData, null, 2);
                  await RNFS.writeFile(path, jsonValue, 'utf8');
                  Alert.alert(`File ${fileName} created and updated`);
                  console.log('File saved successfully:', path);
                  return true;
              }
          } catch (e) {
              console.log('Failed to create survey', e);
              return false;
          }
      }, []);
    
    return{
        saveAllData,
        getAllData,
        postNewSurvey
    }
    
}