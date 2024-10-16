import React, { useContext } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { DoubleDropdownInput } from '../../../../components/shared/DropDownInputComponent';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native';
import { InputComponent } from '../../../../components/shared/InputComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { getInitialValuesPage2 } from '../../../../../utils/initialValues';
import { categories } from '../../../../../utils/cap1/categoriesPage2';
import { fileName } from '../../../../../utils/generateFilename';
import { validationSchemaPage2 } from '../../../../../utils/cap1/validationSchemas';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { ErrorIdMessage } from '../../../../components/shared/ErrorIdComponent';

export interface FormValues {
  P7: FormTemplate;
  P8: FormTemplate;
  P9: FormTemplate;
  P10: FormTemplate;
  P11: FormTemplate;
  P12: FormTemplate;
}

export const FormPage2 = () => {
  const { surveyId } = useContext(SurveyContext);
  const { saveAllData } = UseSaveData();
  const finalSurveyId = surveyId ?? "defaultSurveyId";
  const navigation = useNavigation();
  const initialValues: FormValues = getInitialValuesPage2();

  console.log('Initial values:', initialValues); // Log de los valores iniciales

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaPage2}
          onSubmit={async (
            values: FormValues,
            { setSubmitting }: FormikHelpers<FormValues>
          ) => {
            console.log('Submitting values:', values); // Log de los valores que intentas enviar
            try {
              await saveAllData(`${fileName}.json`, values, finalSurveyId);
              console.log('Data saved successfully'); // Confirmación de que los datos se guardaron
              navigation.navigate('page3' as never); // Asegúrate de que la navegación esté correcta
            } catch (error) {
              console.error('Error saving data:', error); // Log de cualquier error que ocurra
            } finally {
              setSubmitting(false); // Asegúrate de siempre detener el estado de submit
            }
          }}
        >
          {({ handleSubmit, setFieldValue, values, setFieldTouched, errors, touched }) => {
            console.log('Current form values:', values); // Log de los valores actuales del formulario
            console.log('Current errors:', errors); // Log de los errores actuales del formulario
            
            return (
              <View>
                <InputComponent
                  info='P7'
                  textTitle='P7.Nombre municipio:'
                  handleChange={(value: string) => {
                    console.log('P7 changed to:', value); // Log del cambio en P7
                    setFieldValue('P7.response[0].responseuser[0]', value);
                  }}
                  handleBlur={() => {
                    console.log('P7 blurred'); // Log cuando P7 pierde el foco
                    setFieldTouched('P7.response[0].responseuser[0]');
                  }}
                  values={values.P7.response[0].responseuser}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P7" />

                <InputComponent
                  info='P8'
                  textTitle='P8. Código municipio:'
                  handleChange={(value: string) => {
                    console.log('P8 changed to:', value); // Log del cambio en P8
                    setFieldValue('P8.response[0].responseuser[0]', value);
                  }}
                  handleBlur={() => {
                    console.log('P8 blurred'); // Log cuando P8 pierde el foco
                    setFieldTouched('P8.response[0].responseuser[0]');
                  }}
                  values={values.P8.response[0].responseuser}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P8" />

                <DoubleDropdownInput
                categoryTitle="P9. ¿Qué Rol desempeña dentro de su comunidad?"
                subcategoryTitle="Ingrese una subcategoría:"
                categories={categories}
                selectedCategory={values.P9.response[0].idoptresponse} // Asegúrate de que este valor sea correcto
                selectedSubcategory={values.P9.response[0].responseuser[0]}
                onCategoryChange={(value) => {
                  console.log('P9 category changed to:', value);
                  setFieldValue('P9.response[0].idoptresponse', value); // Mantén idoptresponse como "9"

                  const selectedOption = categories.find(option => option.value === value);
                  if (selectedOption) {
                    if (value !== '61') {
                      setFieldValue('P9.response[0].responseuser[0]', selectedOption.label); // Guardar el label
                    } else {
                      setFieldValue('P9.response[0].responseuser[0]', '');// No cambiar responseuser aquí, se hará en onSubcategoryChange
                    }
                  }
                }}
                onSubcategoryChange={(value) => {
                  console.log('P9 subcategory changed to:', value);
                  const currentCategoryValue = values.P9.response[0].idoptresponse;
                  

                  if (currentCategoryValue === '61') {
                    setFieldValue('P9.response[0].responseuser[0]', value); // Guardar el texto del input si es '61'
                  }
                }}
                errors={errors.P9?.response?.[0]}
                touched={touched.P9?.response?.[0]}
              />




                <ErrorIdMessage errors={errors} touched={touched} fieldName="P9" />
                <ErrorMessage errors={errors} touched={touched} fieldName="P9" />

                <DropDownComponent
                  values={values.P10.response[0].responseuser}
                  setFieldValue={(value) => {
                    console.log('P10 changed to:', value); // Log del cambio en P10
                    setFieldValue('P10.response[0].responseuser[0]', value);
                  }}
                  qTitle='P10. ¿Nos autoriza a realizarle esta encuesta?'
                  opValues={['Si', 'No']}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P10" />

                <DropDownComponent
                  values={values.P11.response[0].responseuser}
                  setFieldValue={(value) => {
                    console.log('P11 changed to:', value); // Log del cambio en P11
                    setFieldValue('P11.response[0].responseuser[0]', value);
                  }}
                  qTitle='P11. En qué rango de edad se encuentra?'
                  opValues={['Entre 18 y 25 años', 'Entre 26 y 35 años', 'Entre 36 y 45 años', 'Entre 46 y 55 años', 'Mayor de 56 años']}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P11" />

                <DropDownComponent
                  values={values.P12.response[0].responseuser}
                  setFieldValue={(value) => {
                    console.log('P12 changed to:', value); // Log del cambio en P12
                    setFieldValue('P12.response[0].responseuser[0]', value);
                  }}
                  qTitle='P12. ¿Cuál es su nivel educativo más alto alcanzado?'
                  opValues={['Ninguno', 'Preescolar', 'Básica primaria (1-5)', 'Básica secundaria (6-9)', 'Media (10-13)', 'Técnico', 'Tecnólogo', 'Profesional', 'Especialista', 'Magister', 'Doctorado', 'No sabe / No informa']}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P12" />

                <View style={globalStyles.buttonsBanner}>
                  <Prevcomponent onPrevPressed={() => {
                    console.log('Navigating to page1'); // Log al navegar a la página anterior
                    navigation.navigate('page1' as never);
                  }} />
                  <NextComponent onNextPress={() => {
                    console.log('Navigating to page3'); // Log al intentar navegar a la siguiente página
                    handleSubmit();
                  }} />
                </View>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
