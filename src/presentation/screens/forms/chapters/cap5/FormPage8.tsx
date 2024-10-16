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
import { subcategories18k, subcategories18l, subcategories18m, subcategories18n, subcategories18o } from '../../../../../utils/cap1/categoriesp18';
import { validationSchemaPage8 } from '../../../../../utils/cap1/validationSchemas';

export interface FormValues {
    P18k: FormTemplate;
    P18l: FormTemplate;
    P18m: FormTemplate;
    P18n: FormTemplate;
    P18o: FormTemplate;
}

export const FormPage8 = () => {
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
                    <Text style={globalStyles.Title2}>
                        P18. Del siguiente listado de problemas / desacuerdos / conflictos y disputas ¿Cuáles considera usted que se le presentan con mayor frecuencia a los miembros de su comunidad?
                    </Text>
                </View>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaPage8}
                    onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        console.log("Valores antes de guardar:", values);
                        try {
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                            console.log("Datos guardados con éxito");
                        } catch (error) {
                            console.error("Error al guardar datos:", error);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('page9' as never);
                        }
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, setFieldTouched, errors, touched }) => (
                        <View>
                            <DropDownMultiQuestion
                                questionTitle="P18.11. Problemas en su relación con el Estado, referentes a multas, comparendos, pago de impuestos, expropiaciones, deficiencia en los servicios prestados, abuso de autoridad por policía y ejército o trámites de migrantes."
                                subcategoryTitle="P19.11. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18k}  // Lista de subcategorías
                                selectedCategory={values.P18k.response[0].idoptresponse}
                                selectedSubcategories={values.P18k.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P18k:", value);
                                    setFieldValue('P18k.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P18k:", value);
                                    setFieldValue('P18k.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P18k.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18k.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18k.response[0].subQuestion1Responses || {}} // Inicializa con respuestas vacías
                                errors={errors.P18k?.response?.[0]}
                                touched={touched.P18k?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18k" />

                            <DropDownMultiQuestion
                                questionTitle="P18.12. Problemas relacionados con el servicio de educación y formación, como el acceso, la calidad, y el ambiente educativo (matoneo)."
                                subcategoryTitle="P19.12. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18l}  // Lista de subcategorías
                                selectedCategory={values.P18l.response[0].idoptresponse}
                                selectedSubcategories={values.P18l.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P18l:", value);
                                    setFieldValue('P18l.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P18l:", value);
                                    setFieldValue('P18l.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P18l.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18l.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18l.response[0].subQuestion1Responses || {}} // Inicializa con respuestas vacías
                                errors={errors.P18l?.response?.[0]}
                                touched={touched.P18l?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18l" />

                            <DropDownMultiQuestion
                                questionTitle="P18.13. Problemas relacionados con afectaciones, daños o perjuicios causados o derivados de delitos, como hurto, lesiones, calumnias, daños a la propiedad, secuestro, homicidio, ciberdelito, violencia sexual y violencia intrafamiliar."
                                subcategoryTitle="P19.13. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18m}  // Lista de subcategorías
                                selectedCategory={values.P18m.response[0].idoptresponse}
                                selectedSubcategories={values.P18m.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P18m:", value);
                                    setFieldValue('P18m.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P18m:", value);
                                    setFieldValue('P18m.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P18m.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18m.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18m.response[0].subQuestion1Responses || {}} // Inicializa con respuestas vacías
                                errors={errors.P18m?.response?.[0]}
                                touched={touched.P18m?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18m" />

                            <DropDownMultiQuestion
                                questionTitle="P18.14. Problemas relacionados con afectaciones, daños o perjuicios causados o derivados del conflicto armado o problemas de orden público como desplazamiento forzado, terrorismo, despojo de tierras, extorsión."
                                subcategoryTitle="P19.14. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18n}  // Lista de subcategorías
                                selectedCategory={values.P18n.response[0].idoptresponse}
                                selectedSubcategories={values.P18n.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P18n:", value);
                                    setFieldValue('P18n.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P18n:", value);
                                    setFieldValue('P18n.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P18n.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18n.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18n.response[0].subQuestion1Responses || {}} // Inicializa con respuestas vacías
                                errors={errors.P18n?.response?.[0]}
                                touched={touched.P18n?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18n" />

                            <DropDownMultiQuestion
                                questionTitle="P18.15. Problemas interculturales"
                                subcategoryTitle="P19.15. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18o}  // Lista de subcategorías
                                selectedCategory={values.P18o.response[0].idoptresponse}
                                selectedSubcategories={values.P18o.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Categoría seleccionada P18o:", value);
                                    setFieldValue('P18o.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Subcategoría seleccionada P18o:", value);
                                    setFieldValue('P18o.response[0].responseuser', value);
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    const updatedResponses = { ...values.P18o.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18o.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18o.response[0].subQuestion1Responses || {}} // Inicializa con respuestas vacías
                                errors={errors.P18o?.response?.[0]}
                                touched={touched.P18o?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18o" />
                            <View style={globalStyles.buttonsBanner}>
                                <Prevcomponent onPrevPressed={() => navigation.navigate('page7' as never)} />
                                <NextComponent onNextPress={handleSubmit} />
                            </View>
                        </View>
                    )}
                </Formik>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};
