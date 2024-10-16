import React, { useState } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface DoubleDropdownInputProps {
  categoryTitle: string;
  subcategoryTitle: string;
  categories: { label: string; value: string }[];
  selectedCategory: string;
  selectedSubcategory: string;
  onCategoryChange: (value: string) => void;
  onSubcategoryChange: (value: string) => void;
  errors?: any;
  touched?: any;
}

export const DoubleDropdownInput = ({
  categoryTitle,
  subcategoryTitle,
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
  errors,
  touched,
}: DoubleDropdownInputProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const specificCategoryValue = '61'; // Cambia esto al valor específico que deseas

  const handleCategorySelect = (value: string) => {
    onCategoryChange(value);
    setModalVisible(false);
    if (value !== specificCategoryValue) {
      onSubcategoryChange(''); // Resetea solo si no es "Otro"
    }
  };

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{categoryTitle}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={globalStyles.picker}>
        <Text>{selectedCategory ? categories.find(cat => cat.value === selectedCategory)?.label : "Seleccione una opción"}</Text>
      </TouchableOpacity>
      {errors?.category && touched?.category && (
        <Text style={{ color: 'red' }}>{errors.category}</Text>
      )}

      {/* Modal para seleccionar la categoría */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20, }}>
            <FlatList
              data={categories}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleCategorySelect(item.value)} style={{ paddingVertical: 10 }}>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 20 }}>
              <Text style={{ textAlign: 'center', color: 'blue' }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {selectedCategory === specificCategoryValue && (
        <>
          <Text style={globalStyles.questionTitle}>{subcategoryTitle}</Text>
          <TextInput
            value={selectedSubcategory}
            onChangeText={(text) => onSubcategoryChange(text)}
            placeholder="Especifica tu respuesta"
            style={globalStyles.input}
            placeholderTextColor='lightgray'
          />
          {errors?.subcategory && touched?.subcategory && (
            <Text style={{ color: 'red' }}>{errors.subcategory}</Text>
          )}
        </>
      )}
    </View>
  );
};
