import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useSurveyProcessor } from '../../../hooks/UseSurveyProcessor';
import { useNavigation } from '@react-navigation/native';

interface JsonFile {
  name: string;
  content: any;
  selected: boolean;
}

export const SurveyProcessor: React.FC = () => {
  const { files, error, isProcessing, toggleFileSelection, processSurveys } = useSurveyProcessor();
  const navigation = useNavigation();
  const renderFileItem = ({ item, index }: { item: JsonFile; index: number }) => (
    <View style={styles.itemContainer}>
      <CheckBox
        disabled={isProcessing}
        value={item.selected}
        onValueChange={() => toggleFileSelection(index)}
      />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
        <Pressable 
        onPress= {() => navigation.navigate('Home' as never)}
        style={styles.returnButton}>
            <Text style={styles.processButtonText}>Volver</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Surveys to Process:</Text>
      <FlatList
        data={files}
        renderItem={renderFileItem}
        keyExtractor={(item) => item.name}
      />
        <Pressable 
        onPress= {() => navigation.navigate('Home' as never)}
        style={styles.returnButton}>
            <Text style={styles.processButtonText}>Volver</Text>
        </Pressable>
      <TouchableOpacity
        style={[styles.processButton, isProcessing && styles.processButtonDisabled]}
        onPress={processSurveys}
        disabled={isProcessing}
      >
        
        <Text style={styles.processButtonText}>
          {isProcessing ? 'Processing...' : 'Procesar encuestas'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  processButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  returnButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  processButtonDisabled: {
    backgroundColor: '#A0A0A0',
  },
  processButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});