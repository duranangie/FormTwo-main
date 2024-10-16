import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import { globalStyles } from '../../theme/theme';

interface DropDownMultiQuestionProps {
  questionTitle: string;
  subcategoryTitle: string;
  subcategories: { label: string; value: string }[];
  selectedCategory: string;
  selectedSubcategories: string[];
  onCategoryChange: (value: string) => void;
  onSubcategoryChange: (values: string[]) => void;
  onSubQuestionChange: (index: number, subcategoryValue: string, value: string) => void;
  selectedSubQuestions: { [key: string]: string[] };
  errors?: any;
  touched?: any;
}

export const DropDownMultiQuestion = ({
  questionTitle,
  subcategoryTitle,
  subcategories,
  selectedCategory,
  selectedSubcategories,
  onCategoryChange,
  onSubcategoryChange,
  onSubQuestionChange,
  selectedSubQuestions,
  errors,
  touched,
}: DropDownMultiQuestionProps) => {

  const handleCategoryChange = (value: string) => {
    onCategoryChange(value);
    if (value === 'no') {
      // Set responseuser to "No" when "No" is selected
      onSubcategoryChange(['No']);
    } else {
      // Clear subcategories if "Yes" is selected
      onSubcategoryChange([]);
    }
  };

  const handleCheckboxChange = (value: string) => {
    const newSelectedSubcategories = selectedSubcategories.includes(value)
      ? selectedSubcategories.filter(item => item !== value)
      : [...selectedSubcategories, value];

    onSubcategoryChange(newSelectedSubcategories);
  };

  const questionTitles = [
    'Frente a este problema ¿cuál es la acción que con más frecuencia adoptan los miembros de su comunidad?',
    '¿En qué zonas del municipio considera usted que se presenta este tipo de problema o conflicto?',
    'P22. Sobre este problema ¿es común que la jurisdicción ordinaria o la justicia estatal reclame competencia?',
    'P23. ¿El problema se solucionó?',
  ];

  const getOptionsForQuestion = (questionIndex: number) => {
    switch (questionIndex) {
      case 0:
        return [
          { label: 'Acuden a la justicia propia de su comunidad', value: 'Acuden a la justicia propia de su comunidad' },
          { label: 'Acuden a una institución, autoridad o persona particular', value: 'Acuden a una institución, autoridad o persona particular' },
          { label: 'Intentó llegar a un acuerdo directamente con quien tuvo el problema', value: 'Intentó llegar a un acuerdo directamente con quien tuvo el problema' },
          { label: 'Actuó de forma violenta', value: 'Actuó de forma violenta' },
          { label: 'Acudió a un actor ilegal', value: 'Acudió a un actor ilegal' },
          { label: 'No hizo nada', value: 'No hizo nada' }
        ];
      case 1:
        return [
          { label: 'Urbano', value: 'Urbano' },
          { label: 'Rural', value: 'Rural' },
          { label: 'Ambas', value: 'Ambas' }
        ];
      case 2:
        return [
          { label: 'Sí', value: 'Sí' },
          { label: 'No', value: 'No' }
        ];
      case 3:
        return [
          { label: 'Sí', value: 'Sí' },
          { label: 'No', value: 'No' }
        ];
      default:
        return [{ label: 'Opción por defecto', value: 'Opción por defecto' }];
    }
    
  };

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{questionTitle}</Text>
      <View style={globalStyles.picker}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={handleCategoryChange} // Updated to use handleCategoryChange
        >
          <Picker.Item label="Seleccione una opción" value="" />
          <Picker.Item label="Sí" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>
      </View>
      {errors?.category && touched?.category && <Text style={{ color: 'red' }}>{errors.category}</Text>}

      {selectedCategory === 'yes' && (
        <>
          <Text style={globalStyles.questionTitle}>{subcategoryTitle}</Text>
          {subcategories.map((subcategory) => (
            <View key={subcategory.value} style={globalStyles.checkboxContainer}>
              <CheckBox
                value={selectedSubcategories.includes(subcategory.value)}
                onValueChange={() => handleCheckboxChange(subcategory.value)}
              />
              <Text style={globalStyles.checkboxText}>{subcategory.label}</Text>
            </View>
          ))}
          {errors?.subcategory && touched?.subcategory && <Text style={{ color: 'red' }}>{errors.subcategory}</Text>}

          {subcategories.map((subcategory) => (
            selectedSubcategories.includes(subcategory.value) && (
              <View key={subcategory.value}>
                <Text style={globalStyles.Title2}>Subpreguntas para {subcategory.label}</Text>
                {Array.from({ length: 4 }, (_, index) => (
                  <View key={index}>
                    <Text style={globalStyles.questionTitle}>
                      {questionTitles[index]}
                    </Text>
                    <Picker
                      selectedValue={selectedSubQuestions[subcategory.value]?.[index] || ''}
                      onValueChange={(value: string) => onSubQuestionChange(index, subcategory.value, value)}
                    >
                      <Picker.Item label={`Seleccione una opción para`} value="" />
                      {getOptionsForQuestion(index).map(option => (
                        <Picker.Item key={option.value} label={option.label} value={option.value} />
                      ))}
                    </Picker>
                  </View>
                ))}
              </View>
            )
          ))}
        </>
      )}
    </View>
  );
};
