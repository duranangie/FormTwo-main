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
import { getInitialValuesPage6 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { DropDownMultiQuestion } from '../../../../components/shared/DropDownMultiQuestion';
import { subcategories18f, subcategories18g, subcategories18h, subcategories18i, subcategories18j } from '../../../../../utils/cap1/categoriesp18';
import { validationSchemaPage6, validationSchemaPage7 } from '../../../../../utils/cap1/validationSchemas';

export interface FormValues {
    P18f: FormTemplate;
    P18g: FormTemplate;
    P18h: FormTemplate;
    P18i: FormTemplate;
    P18j: FormTemplate;
}

export const FormPage7 = () => {
    const navigation = useNavigation();
    const { saveAllData } = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage6();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
                <View style={globalStyles.CapTitle}>
                    <Text style={globalStyles.Title}>Capítulo 5. Conflictividades</Text>
                </View>
                <View>
                    <Text style={globalStyles.Title2}> P18. Del siguiente listado de problemas / desacuerdos / conflictos y disputas ¿Cuáles considera usted que se le presentan con mayor frecuencia a los miembros de su comunidad? </Text>
                </View>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaPage7}
                    onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        console.log("Valores antes de guardar:", values);
                        try {
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                            console.log("Datos guardados con éxito");
                        } catch (error) {
                            console.error("Error al guardar datos:", error);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('page8' as never);
                        }
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, setFieldTouched, errors, touched }) => (
                        <View>
                            <DropDownMultiQuestion
                                questionTitle="P18.6. Problemas relacionados con la vivienda en la que habita o de la que es dueño, o problemas con vecinos por ruidos, malos olores, mascotas, chismes y otros."
                                subcategoryTitle="P19.6. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18f}
                                selectedCategory={values.P18f.response[0].idoptresponse}
                                selectedSubcategories={values.P18f.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P18f:", value);
                                    setFieldValue('P18f.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P18f:", value);
                                    setFieldValue('P18f.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P18f.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18f.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18f.response[0].subQuestion1Responses || {}}
                                errors={errors.P18f?.response?.[0]}
                                touched={touched.P18f?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18f" />

                            <DropDownMultiQuestion
                                questionTitle="P18.7. Problemas relacionados con el entorno o el espacio público, como el daño, deterioro o falta de paraderos, bancas, calles, puentes; invasión, uso indebido del espacio público o perjuicios por la ejecución de obras públicas."
                                subcategoryTitle="P19.7. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18g}
                                selectedCategory={values.P18g.response[0].idoptresponse}
                                selectedSubcategories={values.P18g.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P18g:", value);
                                    setFieldValue('P18g.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P18g:", value);
                                    setFieldValue('P18g.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P18g.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18g.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18g.response[0].subQuestion1Responses || {}}
                                errors={errors.P18g?.response?.[0]}
                                touched={touched.P18g?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18g" />

                            <DropDownMultiQuestion
                                questionTitle="P18.8. Problemas relacionados con la propiedad, uso y tenencia de la tierra como disputas sobre títulos, linderos, registro catastral o extinción de dominio."
                                subcategoryTitle="P19.8. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18h}
                                selectedCategory={values.P18h.response[0].idoptresponse}
                                selectedSubcategories={values.P18h.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P18h:", value);
                                    setFieldValue('P18h.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P18h:", value);
                                    setFieldValue('P18h.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P18h.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18h.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18h.response[0].subQuestion1Responses || {}}
                                errors={errors.P18h?.response?.[0]}
                                touched={touched.P18h?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18h" />

                            <DropDownMultiQuestion
                                questionTitle="P18.9. Problemas relacionados con el medio ambiente o el acceso a recursos comunitarios, como conflictos por el acceso a fuentes de agua, explotación ilegal de recursos ambientales o contaminación."
                                subcategoryTitle="P19.9. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18i}
                                selectedCategory={values.P18i.response[0].idoptresponse}
                                selectedSubcategories={values.P18i.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P18i:", value);
                                    setFieldValue('P18i.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P18i:", value);
                                    setFieldValue('P18i.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P18i.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18i.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18i.response[0].subQuestion1Responses || {}}
                                errors={errors.P18i?.response?.[0]}
                                touched={touched.P18i?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18i" />

                            <DropDownMultiQuestion
                                questionTitle="P18.10. Problemas relacionados con la prestación de los servicios de salud, pensión, riesgos laborales, como en la asignación de citas, medicamentos, calidad, oportunidad, afiliación, negación, reconocimiento o pago de la mesada pensional."
                                subcategoryTitle="P19.10. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18j}
                                selectedCategory={values.P18j.response[0].idoptresponse}
                                selectedSubcategories={values.P18j.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P18j:", value);
                                    setFieldValue('P18j.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P18j:", value);
                                    setFieldValue('P18j.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P18j.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18j.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18j.response[0].subQuestion1Responses || {}}
                                errors={errors.P18j?.response?.[0]}
                                touched={touched.P18j?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18j" />
                            <View style={globalStyles.buttonsBanner}>
                                <Prevcomponent onPrevPressed={() => navigation.navigate('page6' as never)} />
                                <NextComponent onNextPress={handleSubmit} />
                            </View>
                        </View>
                    )}
                </Formik>


            </ScrollView>
        </KeyboardAvoidingView>
    );
};
