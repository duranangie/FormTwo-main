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
import { subcategories18a, subcategories18b, subcategories18c, subcategories18d, subcategories18e } from '../../../../../utils/cap1/categoriesp18';
import { validationSchemaPage5, validationSchemaPage6 } from '../../../../../utils/cap1/validationSchemas';

export interface FormValues {
    P18a: FormTemplate;
    P18b: FormTemplate;
    P18c: FormTemplate;
    P18d: FormTemplate;
    P18e: FormTemplate;
}

export const FormPage6 = () => {
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
                    validationSchema={validationSchemaPage6}
                    onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        try {
                            console.log("Datos a guardar en JSON:", values);
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('page7' as never);
                        }
                    }}
                >
                    {({ handleSubmit, values, setFieldValue, errors, touched }) => (
                        <View>
                            <DropDownMultiQuestion
                                questionTitle="P18.1. Problemas relacionados con familiares como separación o divorcio, cuotas de alimentos, herencias o sucesiones, paternidad / maternidad, cuidado de personas que más lo requieren y gastos del hogar."
                                subcategoryTitle="P19.1. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18a}
                                selectedCategory={values.P18a.response[0].idoptresponse}
                                selectedSubcategories={values.P18a.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Cambio de categoría P18a:", value);
                                    setFieldValue('P18a.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Cambio de subcategoría P18a:", value);
                                    if (value.includes("no")) {
                                        setFieldValue('P18a.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P18a.response[0].responseuser', value);
                                    }
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    console.log(`Cambio de subpregunta P18a: ${subcategoryValue}, índice: ${index}, valor: ${value}`);
                                    const updatedResponses = { ...values.P18a.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18a.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18a.response[0].subQuestion1Responses || {}}
                                errors={errors.P18a?.response?.[0]}
                                touched={touched.P18a?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18a" />

                            <DropDownMultiQuestion
                                questionTitle="P18.2. Problemas relacionados con el consumo de un producto, bien o servicio (telefonía celular, televisión por cable, internet, transporte, alimentos, electrodomésticos y servicios técnicos o profesionales). Se excluyen los servicios públicos domiciliarios."
                                subcategoryTitle="P19.2. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18b}
                                selectedCategory={values.P18b.response[0].idoptresponse}
                                selectedSubcategories={values.P18b.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Cambio de categoría P18b:", value);
                                    setFieldValue('P18b.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Cambio de subcategoría P18b:", value);
                                    if (value.includes("no")) {
                                        setFieldValue('P18b.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P18b.response[0].responseuser', value);
                                    }
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    console.log(`Cambio de subpregunta P18b: ${subcategoryValue}, índice: ${index}, valor: ${value}`);
                                    const updatedResponses = { ...values.P18b.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18b.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18b.response[0].subQuestion1Responses || {}}
                                errors={errors.P18b?.response?.[0]}
                                touched={touched.P18b?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18b" />

                            <DropDownMultiQuestion
                                questionTitle="P18.3. Problemas relacionados con la prestación de un servicio público domiciliario como agua, luz, gas, alcantarillado o basuras."
                                subcategoryTitle="P19.3. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18c}
                                selectedCategory={values.P18c.response[0].idoptresponse}
                                selectedSubcategories={values.P18c.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Cambio de categoría P18c:", value);
                                    setFieldValue('P18c.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Cambio de subcategoría P18c:", value);
                                    if (value.includes("no")) {
                                        setFieldValue('P18c.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P18c.response[0].responseuser', value);
                                    }
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    console.log(`Cambio de subpregunta P18c: ${subcategoryValue}, índice: ${index}, valor: ${value}`);
                                    const updatedResponses = { ...values.P18c.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18c.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18c.response[0].subQuestion1Responses || {}}
                                errors={errors.P18c?.response?.[0]}
                                touched={touched.P18c?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18c" />

                            <DropDownMultiQuestion
                                questionTitle="P18.4. Problemas relacionados con su trabajo o empleo, como falta de pago de salarios, reconocimiento o formalización de la relación laboral, cambio en las condiciones laborales, despido, acoso."
                                subcategoryTitle="P19.4. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18d}
                                selectedCategory={values.P18d.response[0].idoptresponse}
                                selectedSubcategories={values.P18d.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Cambio de categoría P18d:", value);
                                    setFieldValue('P18d.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Cambio de subcategoría P18d:", value);
                                    if (value.includes("no")) {
                                        setFieldValue('P18d.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P18d.response[0].responseuser', value);
                                    }
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    console.log(`Cambio de subpregunta P18d: ${subcategoryValue}, índice: ${index}, valor: ${value}`);
                                    const updatedResponses = { ...values.P18d.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18d.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18d.response[0].subQuestion1Responses || {}}
                                errors={errors.P18d?.response?.[0]}
                                touched={touched.P18d?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18d" />

                            <DropDownMultiQuestion
                                questionTitle="P18.5. Problemas relacionados con deudas contraídas con el sector financiero, solidario o particulares, respecto a intereses elevados, hipotecas, embargos, quiebras, reportes a centrales de riesgo, deudas educativas."
                                subcategoryTitle="P19.5. ¿Cuáles de las siguientes tipologías de problemas afectan con mayor frecuencia a los miembros de su comunidad?"
                                subcategories={subcategories18e}
                                selectedCategory={values.P18e.response[0].idoptresponse}
                                selectedSubcategories={values.P18e.response[0].responseuser || []}
                                onCategoryChange={(value) => {
                                    console.log("Cambio de categoría P18e:", value);
                                    setFieldValue('P18e.response[0].idoptresponse', value);
                                }}
                                onSubcategoryChange={(value) => {
                                    console.log("Cambio de subcategoría P18e:", value);
                                    if (value.includes("no")) {
                                        setFieldValue('P18e.response[0].responseuser', ["No"]);
                                    } else {
                                        setFieldValue('P18e.response[0].responseuser', value);
                                    }
                                }}
                                onSubQuestionChange={(index, subcategoryValue, value) => {
                                    console.log(`Cambio de subpregunta P18e: ${subcategoryValue}, índice: ${index}, valor: ${value}`);
                                    const updatedResponses = { ...values.P18e.response[0].subQuestion1Responses };
                                    updatedResponses[subcategoryValue] = updatedResponses[subcategoryValue] || [];
                                    updatedResponses[subcategoryValue][index] = value;
                                    setFieldValue('P18e.response[0].subQuestion1Responses', updatedResponses);
                                }}
                                selectedSubQuestions={values.P18e.response[0].subQuestion1Responses || {}}
                                errors={errors.P18e?.response?.[0]}
                                touched={touched.P18e?.response?.[0]}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18e" />
                            <View style={globalStyles.buttonsBanner}>
                                <Prevcomponent onPrevPressed={() => navigation.navigate('page5' as never)} />
                                <NextComponent onNextPress={handleSubmit} />
                            </View>
                        </View>
                    )}
                </Formik>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};
