import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../../theme/theme';
import CheckBox from '@react-native-community/checkbox';

interface DoubleDropdownSubcatProps {
  questionTitle: string;
  subcategoryTitle: string;
  subcategories: { label: string; value: string }[];
  selectedCategory: string;
  selectedSubcategories: string[];
  onCategoryChange: (value: string) => void;
  onSubcategoryChange: (values: string[]) => void;
  onTextChange?: (text: string) => void;
  errors?: any;
  touched?: any;
}

export const DoubleDropdownSubcat = ({
  questionTitle,
  subcategoryTitle,
  subcategories,
  selectedCategory,
  selectedSubcategories,
  onCategoryChange,
  onSubcategoryChange,
  onTextChange,
  errors,
  touched,
}: DoubleDropdownSubcatProps) => {
  const specificSubcategoryValue = '61';

  const handleCheckboxChange = (value: string) => {
    const newSelectedSubcategories = selectedSubcategories.includes(value)
      ? selectedSubcategories.filter(item => item !== value)
      : [...selectedSubcategories, value];
    onSubcategoryChange(newSelectedSubcategories);
  };

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{questionTitle}</Text>

      <View style={globalStyles.picker}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={onCategoryChange}
        >
          <Picker.Item label="Seleccione una opción" value="s" />
          <Picker.Item label="Sí" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>
        {errors?.category && touched?.category && (
          <Text style={{ color: 'red' }}>{errors.category}</Text>
        )}
      </View>

      {selectedCategory === 'yes' && (
        <>
          <Text style={globalStyles.questionTitle}>{subcategoryTitle}</Text>
          {subcategories.map(subcategory => (
            <View key={subcategory.value} style={globalStyles.checkboxContainer}>
              <CheckBox
                value={selectedSubcategories.includes(subcategory.value)}
                onValueChange={() => handleCheckboxChange(subcategory.value)}
              />
              <Text style={globalStyles.checkboxText}>{subcategory.label}</Text>
            </View>
          ))}
          {errors?.subcategory && touched?.subcategory && (
            <Text style={{ color: 'red' }}>{errors.subcategory}</Text>
          )}

          {selectedSubcategories.includes(specificSubcategoryValue) && (
            <View>
              <TextInput
                onChangeText={onTextChange}
                placeholder="Especifica tu respuesta"
                style={globalStyles.input}
                placeholderTextColor='lightgray'
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};
