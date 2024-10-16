import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../../theme/theme';
import { ErrorMessage } from 'formik';

interface DoubleDropdownProps {
  categoryTitle: string;
  subcategoryTitle: string;
  categories: { label: string; value: string }[];
  subcategories: { [key: string]: { label: string; value: string }[] };
  selectedCategory: string;
  selectedSubcategory: string;
  onCategoryChange: (value: string) => void;
  onSubcategoryChange: (value: string) => void;
  errors?: any;
  touched?: any;
}

export const DoubleDropdown = ({
  categoryTitle,
  subcategoryTitle,
  categories,
  subcategories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
  errors,
  touched,
}: DoubleDropdownProps) => {
  return (
    <View>
      <Text style={globalStyles.questionTitle}>{categoryTitle}</Text>
      <View style={globalStyles.picker}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(value) => {
            onCategoryChange(value);
            onSubcategoryChange(''); // Reset subcategory when category changes
          }}
        >
          <Picker.Item label="Seleccione una opción" value="" />
          {categories.map((category) => (
            <Picker.Item key={category.value} label={category.label} value={category.value} />
          ))}
        </Picker>
        {errors?.category && touched?.category && (
          <Text style={{ color: 'red' }}>{errors.category}</Text>
        )}
      </View>
      {selectedCategory ? (
        <>
          <Text style={globalStyles.questionTitle}>{subcategoryTitle}</Text>
          <View style={globalStyles.picker}>
            <Picker
              selectedValue={selectedSubcategory}
              onValueChange={(value) => onSubcategoryChange(value)}
            >
              <Picker.Item label="Seleccione una opción" value="" />
              {subcategories[selectedCategory]?.map((subcategory) => (
                <Picker.Item key={subcategory.value} label={subcategory.label} value={subcategory.value} />
              ))}
            </Picker>
            {errors?.subcategory && touched?.subcategory && (
              <Text style={{ color: 'red' }}>{errors.subcategory}</Text>
            )}
          </View>
        </>
      ) : null}
    </View>
  );
};
