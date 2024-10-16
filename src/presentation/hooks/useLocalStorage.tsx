import { useCallback } from "react";
import { Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLocalStorage = () => {
    const saveLocalData = useCallback(async (data: Record<string, any>) => {
      try {
        const savePromises = Object.keys(data).map(async (key) => {
          const value = JSON.stringify(data[key]);
          await AsyncStorage.setItem(`@${key}`, value);
        });
        await Promise.all(savePromises);
        Alert.alert('Data saved locally');
      } catch (e) {
        console.log('Failed to save info in local storage', e);
      }
    }, []);
  
    return { saveLocalData };
  };
  
  export default useLocalStorage;