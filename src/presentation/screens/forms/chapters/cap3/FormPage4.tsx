import React, { useContext } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { fileName } from '../../../../../utils/generateFilename';
import { getInitialValuesPage4 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { DoubleDropdownSubcat } from '../../../../components/shared/DoubleDropdownSubcat';
import { subcategories16a, subcategories16b, subcategories16c, subcategories16d } from '../../../../../utils/cap1/categoriesp16';
import { validationSchemaPage4 } from '../../../../../utils/cap1/validationSchemas';

export interface FormValues {
    P16a: FormTemplate;
    P16b: FormTemplate;
    P16c: FormTemplate;
    P16d: FormTemplate;
}

export const FormPage4 = () => {
    const navigation = useNavigation();
    const { saveAllData } = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage4();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
                <View style={globalStyles.CapTitle}>
                    <Text style={globalStyles.Title}>Capítulo 3. Barreras de acceso a la justicia</Text>
                </View>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaPage4}
                    onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        try {
                            console.log('Submitting values for FormPage4:', JSON.stringify(values, null, 2));
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                            console.log('Data saved successfully for FormPage4');
                        } catch (error) {
                            console.error('Error saving data in FormPage4:', error);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('page5' as never);
                        }
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, setFieldTouched, errors, touched }) => {
                        console.log('Current errors for FormPage4:', errors);

                        return (
                            <View>
                                <Text style={globalStyles.Title2}>P16. Del siguiente listado, ¿Cuáles considera, desde su rol (como representante de la comunidad), que son las principales barreras de acceso a la justicia que se le presentan a los miembros de su comunidad?</Text>

                                {/* P16a */}
                                <DoubleDropdownSubcat
                                    questionTitle="P16.1. Culturales y lingüísticas"
                                    subcategoryTitle="Seleccione lo que aplica"
                                    subcategories={subcategories16a}
                                    selectedCategory={values.P16a.response[0].idoptresponse}
                                    selectedSubcategories={values.P16a.response[0].responseuser || []}
                                    onCategoryChange={(value) => {
                                        console.log(`P16a: Category changed to: ${value}`);
                                        setFieldValue('P16a.response[0].idoptresponse', value);

                                        if (value === "no") {
                                            setFieldValue('P16a.response[0].responseuser', ["No"]);
                                        } else {
                                            setFieldValue('P16a.response[0].responseuser', []);
                                        }
                                        console.log(`P16a: Subcategories reset`);
                                    }}
                                    onSubcategoryChange={(selectedValues) => {
                                        console.log(`P16a: Subcategories changed to:`, selectedValues);

                                        const currentResponseUser = values.P16a.response[0].responseuser || [];
                                        const updatedResponseUser = currentResponseUser.filter(item => selectedValues.includes(item));

                                        selectedValues.forEach((subValue) => {
                                            if (!updatedResponseUser.includes(subValue)) {
                                                updatedResponseUser.push(subValue);
                                            }
                                        });

                                        setFieldValue('P16a.response[0].responseuser', updatedResponseUser);
                                    }}
                                    onTextChange={(text) => {
                                        console.log(`P16a: Additional text changed to: ${text}`);

                                        const currentResponseUser = values.P16a.response[0].responseuser || [];
                                        const filteredResponseUser = currentResponseUser.filter(item => item !== values.P16a.response[0].additionalText);

                                        if (text) {
                                            filteredResponseUser.push(text);
                                        }

                                        setFieldValue('P16a.response[0].responseuser', filteredResponseUser);
                                        setFieldValue('P16a.response[0].additionalText', text);
                                    }}
                                    errors={errors.P16a?.response?.[0]}
                                    touched={touched.P16a?.response?.[0]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P16a" />

                                {/* P16b */}
                                <DoubleDropdownSubcat
                                    questionTitle="P16.2. De género"
                                    subcategoryTitle="Seleccione lo que aplica"
                                    subcategories={subcategories16b}
                                    selectedCategory={values.P16b.response[0].idoptresponse}
                                    selectedSubcategories={values.P16b.response[0].responseuser || []}
                                    onCategoryChange={(value) => {
                                        console.log(`P16b: Category changed to: ${value}`);
                                        setFieldValue('P16b.response[0].idoptresponse', value);

                                        if (value === "no") {
                                            setFieldValue('P16b.response[0].responseuser', ["No"]);
                                        } else {
                                            setFieldValue('P16b.response[0].responseuser', []);
                                        }
                                    }}
                                    onSubcategoryChange={(selectedValues) => {
                                        console.log(`P16b: Subcategories changed to:`, selectedValues);

                                        const currentResponseUser = values.P16b.response[0].responseuser || [];
                                        const updatedResponseUser = currentResponseUser.filter(item => selectedValues.includes(item));

                                        selectedValues.forEach((subValue) => {
                                            if (!updatedResponseUser.includes(subValue)) {
                                                updatedResponseUser.push(subValue);
                                            }
                                        });

                                        setFieldValue('P16b.response[0].responseuser', updatedResponseUser);
                                    }}
                                    onTextChange={(text) => {
                                        console.log(`P16b: Additional text changed to: ${text}`);

                                        const currentResponseUser = values.P16b.response[0].responseuser || [];
                                        const filteredResponseUser = currentResponseUser.filter(item => item !== values.P16b.response[0].additionalText);

                                        if (text) {
                                            filteredResponseUser.push(text);
                                        }

                                        setFieldValue('P16b.response[0].responseuser', filteredResponseUser);
                                        setFieldValue('P16b.response[0].additionalText', text);
                                    }}
                                    errors={errors.P16b?.response?.[0]}
                                    touched={touched.P16b?.response?.[0]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P16b" />

                                {/* P16c */}
                                <DoubleDropdownSubcat
                                    questionTitle="P16.3. De seguridad, orden público o asociadas al conflicto armado"
                                    subcategoryTitle="Seleccione lo que aplica"
                                    subcategories={subcategories16c}
                                    selectedCategory={values.P16c.response[0].idoptresponse}
                                    selectedSubcategories={values.P16c.response[0].responseuser || []}
                                    onCategoryChange={(value) => {
                                        console.log(`P16c: Category changed to: ${value}`);
                                        setFieldValue('P16c.response[0].idoptresponse', value);

                                        if (value === "no") {
                                            setFieldValue('P16c.response[0].responseuser', ["No"]);
                                        } else {
                                            setFieldValue('P16c.response[0].responseuser', []);
                                        }
                                    }}
                                    onSubcategoryChange={(selectedValues) => {
                                        console.log(`P16c: Subcategories changed to:`, selectedValues);

                                        const currentResponseUser = values.P16c.response[0].responseuser || [];
                                        const updatedResponseUser = currentResponseUser.filter(item => selectedValues.includes(item));

                                        selectedValues.forEach((subValue) => {
                                            if (!updatedResponseUser.includes(subValue)) {
                                                updatedResponseUser.push(subValue);
                                            }
                                        });

                                        setFieldValue('P16c.response[0].responseuser', updatedResponseUser);
                                    }}
                                    onTextChange={(text) => {
                                        console.log(`P16c: Additional text changed to: ${text}`);

                                        const currentResponseUser = values.P16c.response[0].responseuser || [];
                                        const filteredResponseUser = currentResponseUser.filter(item => item !== values.P16c.response[0].additionalText);

                                        if (text) {
                                            filteredResponseUser.push(text);
                                        }

                                        setFieldValue('P16c.response[0].responseuser', filteredResponseUser);
                                        setFieldValue('P16c.response[0].additionalText', text);
                                    }}
                                    errors={errors.P16c?.response?.[0]}
                                    touched={touched.P16c?.response?.[0]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P16c" />

                                {/* P16d */}
                                <DoubleDropdownSubcat
                                    questionTitle="P16.4. Económicas"
                                    subcategoryTitle="Seleccione lo que aplica"
                                    subcategories={subcategories16d}
                                    selectedCategory={values.P16d.response[0].idoptresponse}
                                    selectedSubcategories={values.P16d.response[0].responseuser || []}
                                    onCategoryChange={(value) => {
                                        console.log(`P16d: Category changed to: ${value}`);
                                        setFieldValue('P16d.response[0].idoptresponse', value);

                                        if (value === "no") {
                                            setFieldValue('P16d.response[0].responseuser', ["No"]);
                                        } else {
                                            setFieldValue('P16d.response[0].responseuser', []);
                                        }
                                    }}
                                    onSubcategoryChange={(selectedValues) => {
                                        console.log(`P16d: Subcategories changed to:`, selectedValues);

                                        const currentResponseUser = values.P16d.response[0].responseuser || [];
                                        const updatedResponseUser = currentResponseUser.filter(item => selectedValues.includes(item));

                                        selectedValues.forEach((subValue) => {
                                            if (!updatedResponseUser.includes(subValue)) {
                                                updatedResponseUser.push(subValue);
                                            }
                                        });

                                        setFieldValue('P16d.response[0].responseuser', updatedResponseUser);
                                    }}
                                    onTextChange={(text) => {
                                        console.log(`P16d: Additional text changed to: ${text}`);

                                        const currentResponseUser = values.P16d.response[0].responseuser || [];
                                        const filteredResponseUser = currentResponseUser.filter(item => item !== values.P16d.response[0].additionalText);

                                        if (text) {
                                            filteredResponseUser.push(text);
                                        }

                                        setFieldValue('P16d.response[0].responseuser', filteredResponseUser);
                                        setFieldValue('P16d.response[0].additionalText', text);
                                    }}
                                    errors={errors.P16d?.response?.[0]}
                                    touched={touched.P16d?.response?.[0]}
                                />
                                <ErrorMessage errors={errors} touched={touched} fieldName="P16d" />

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
