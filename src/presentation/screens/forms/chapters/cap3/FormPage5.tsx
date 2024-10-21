import React, { useContext } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { DoubleDropdownSubcat } from '../../../../components/shared/DoubleDropdownSubcat';
import { subcategories16e, subcategories16f, subcategories16g, subcategories16h } from '../../../../../utils/cap1/categoriesp16';
import { getInitialValuesPage4, getInitialValuesPage5 } from '../../../../../utils/initialValues';
import { fileName } from '../../../../../utils/generateFilename';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { validationSchemaPage5 } from '../../../../../utils/cap1/validationSchemas';

export interface FormValues {
    P16e: FormTemplate;
    P16f: FormTemplate;
    P16g: FormTemplate;
    P16h: FormTemplate;
}

export const FormPage5 = () => {
    const navigation = useNavigation();
    const { saveAllData } = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage5();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaPage5}
                    onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        try {
                            console.log('Submitting values for FormPage5:', JSON.stringify(values, null, 2));
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                            console.log('Data saved successfully for FormPage5');
                        } catch (error) {
                            console.error('Error saving data in FormPage5:', error);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('page6' as never);
                        }
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, setFieldTouched, errors, touched }) => {
                        console.log('Current errors for FormPage5:', errors);

                        return (
                            <View>
                                <Text style={globalStyles.Title2}>
                                    P16. Del siguiente listado, ¿Cuáles considera, desde su rol (como representante de la comunidad), que son las principales barreras de acceso a la justicia que se le presentan a los miembros de su comunidad?
                                </Text>

                                {/* P16e */}
                                <DoubleDropdownSubcat
                                    questionTitle="P16.5. Económicas"
                                    subcategoryTitle="Seleccione lo que aplica"
                                    subcategories={subcategories16e}
                                    selectedCategory={values.P16e.response[0].idoptresponse}
                                    selectedSubcategories={values.P16e.response[0].responseuser || []}
                                    onCategoryChange={(value) => {
                                        console.log(`P16e: Category changed to: ${value}`);
                                        setFieldValue('P16e.response[0].idoptresponse', value);

                                        if (value === "no") {
                                            setFieldValue('P16e.response[0].responseuser', ["No"]);
                                        } else {
                                            setFieldValue('P16e.response[0].responseuser', []);
                                        }
                                    }}
                                    onSubcategoryChange={(selectedValues) => {
                                        console.log(`P16e: Subcategories changed to:`, selectedValues);
                                        setFieldValue('P16e.response[0].responseuser', selectedValues);
                                    }}
                                    onTextChange={(text) => {
                                        console.log(`P16e: Additional text changed to: ${text}`);
                                        setFieldValue('P16e.response[0].additionalText', text);
                                    }}
                                    errors={errors.P16e?.response?.[0]}
                                    touched={touched.P16e?.response?.[0]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P16e" />

                                {/* P16f */}
                                <DoubleDropdownSubcat
                                    questionTitle="P16.6. Geográficas"
                                    subcategoryTitle="Seleccione lo que aplica"
                                    subcategories={subcategories16f}
                                    selectedCategory={values.P16f.response[0].idoptresponse}
                                    selectedSubcategories={values.P16f.response[0].responseuser || []}
                                    onCategoryChange={(value) => {
                                        console.log(`P16f: Category changed to: ${value}`);
                                        setFieldValue('P16f.response[0].idoptresponse', value);

                                        if (value === "no") {
                                            setFieldValue('P16f.response[0].responseuser', ["No"]);
                                        } else {
                                            setFieldValue('P16f.response[0].responseuser', []);
                                        }
                                    }}
                                    onSubcategoryChange={(selectedValues) => {
                                        console.log(`P16f: Subcategories changed to:`, selectedValues);
                                        setFieldValue('P16f.response[0].responseuser', selectedValues);
                                    }}
                                    onTextChange={(text) => {
                                        console.log(`P16f: Additional text changed to: ${text}`);
                                        setFieldValue('P16f.response[0].additionalText', text);
                                    }}
                                    errors={errors.P16f?.response?.[0]}
                                    touched={touched.P16f?.response?.[0]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P16f" />

                                {/* P16g */}
                                <DoubleDropdownSubcat
                                    questionTitle="P16.7. Institucionales"
                                    subcategoryTitle="Seleccione lo que aplica"
                                    subcategories={subcategories16g}
                                    selectedCategory={values.P16g.response[0].idoptresponse}
                                    selectedSubcategories={values.P16g.response[0].responseuser || []}
                                    onCategoryChange={(value) => {
                                        console.log(`P16g: Category changed to: ${value}`);
                                        setFieldValue('P16g.response[0].idoptresponse', value);

                                        if (value === "no") {
                                            setFieldValue('P16g.response[0].responseuser', ["No"]);
                                        } else {
                                            setFieldValue('P16g.response[0].responseuser', []);
                                        }
                                    }}
                                    onSubcategoryChange={(selectedValues) => {
                                        console.log(`P16g: Subcategories changed to:`, selectedValues);
                                        setFieldValue('P16g.response[0].responseuser', selectedValues);
                                    }}
                                    onTextChange={(text) => {
                                        console.log(`P16g: Additional text changed to: ${text}`);
                                        setFieldValue('P16g.response[0].additionalText', text);
                                    }}
                                    errors={errors.P16g?.response?.[0]}
                                    touched={touched.P16g?.response?.[0]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P16g" />

                                {/* P16h */}
                                <DoubleDropdownSubcat
                                    questionTitle="P16.8. Tecnológicas"
                                    subcategoryTitle="Seleccione lo que aplica"
                                    subcategories={subcategories16h}
                                    selectedCategory={values.P16h.response[0].idoptresponse}
                                    selectedSubcategories={values.P16h.response[0].responseuser || []}
                                    onCategoryChange={(value) => {
                                        console.log(`P16h: Category changed to: ${value}`);
                                        setFieldValue('P16h.response[0].idoptresponse', value);

                                        if (value === "no") {
                                            setFieldValue('P16h.response[0].responseuser', ["No"]);
                                        } else {
                                            setFieldValue('P16h.response[0].responseuser', []);
                                        }
                                    }}
                                    onSubcategoryChange={(selectedValues) => {
                                        console.log(`P16h: Subcategories changed to:`, selectedValues);
                                        setFieldValue('P16h.response[0].responseuser', selectedValues);
                                    }}
                                    onTextChange={(text) => {
                                        console.log(`P16h: Additional text changed to: ${text}`);
                                        setFieldValue('P16h.response[0].additionalText', text);
                                    }}
                                    errors={errors.P16h?.response?.[0]}
                                    touched={touched.P16h?.response?.[0]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P16h" />
                                
                                <View style={globalStyles.buttonsBanner}>
                                    <Prevcomponent onPrevPressed={() => navigation.navigate('page4' as never)} />
                                    <NextComponent onNextPress={handleSubmit} />
                                </View>
                            </View>
                        );
                    }}
                </Formik>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};