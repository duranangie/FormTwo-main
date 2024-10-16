import { useState, useEffect } from 'react';
import RNFS from 'react-native-fs';
import { Alert } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

interface JsonFile {
  name: string;
  content: any;
  selected: boolean;
}

export const useSurveyProcessor = () => {
  const [files, setFiles] = useState<JsonFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    readJsonFiles();
  }, []);

  const readJsonFiles = async () => {
    try {
      const path = '/data/data/com.formtwo/files';
      const result = await RNFS.readDir(path);
      const jsonFiles = result.filter(file => file.name.endsWith('.json'));

      const fileContents = await Promise.all(
        jsonFiles.map(async (file) => {
          const content = await RNFS.readFile(file.path, 'utf8');
          return { name: file.name, content: JSON.parse(content), selected: false };
        })
      );

      setFiles(fileContents);
    } catch (err) {
      if (err instanceof Error) {
        setError('Error reading files: ' + err.message);
      } else {
        setError('An unknown error occurred while reading files');
      }
    }
  };

  const toggleFileSelection = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles[index].selected = !updatedFiles[index].selected;
    setFiles(updatedFiles);
  };

  const processSurvey = async (file: JsonFile): Promise<void> => {
    const apiUrl = 'http://154.38.171.54:8288/uissurvey-app/api/surveyanswer';
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 seconds timeout

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(file.content),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status === 500) {
          const errorText = await response.text();
          console.error(`Server error details for ${file.name}:`, errorText);
          throw new Error(`Error interno del servidor al procesar ${file.name}. Por favor, contacte al soporte técnico.`);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(`Server response for ${file.name}:`, result);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Error processing ${file.name}: ${err.message}`);
      } else {
        throw new Error(`Unknown error occurred while processing ${file.name}`);
      }
    }
  };

  const processSurveys = async () => {
    const selectedFiles = files.filter(file => file.selected);
    if (selectedFiles.length === 0) {
      Alert.alert('Seleccione encuestas', 'Por favor seleccione al menos una encuesta.');
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    try {
      const netInfo = await NetInfo.fetch();
      if (!netInfo.isConnected) {
        throw new Error('No hay conexión a internet. Por favor, verifique su conexión e intente nuevamente.');
      }

      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        try {
          await processSurvey(file);
          setProgress(((i + 1) / selectedFiles.length) * 100);
        } catch (err) {
          console.error(`Error processing survey ${file.name}:`, err);
          Alert.alert('Error', err instanceof Error ? err.message : 'An unknown error occurred');
        }
      }

      Alert.alert('Éxito', 'Proceso de encuestas completado. Verifique los resultados individuales.');
      await readJsonFiles(); // Reload files after processing
    } catch (err) {
      console.error('Error general en el procesamiento de encuestas:', err);
      Alert.alert('Error', err instanceof Error ? err.message : 'An unknown error occurred during processing');
    } finally {
      setIsProcessing(false);
      setProgress(0);
    }
  };

  return {
    files,
    error,
    isProcessing,
    progress,
    toggleFileSelection,
    processSurveys
  };
};