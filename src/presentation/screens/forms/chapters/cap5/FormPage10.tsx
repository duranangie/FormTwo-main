import React, { useContext, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, Button } from 'react-native';
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
import { getInitialValuesPage10 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'; 
import { InputComponent } from '../../../../components/shared/InputComponent';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { validationSchemaPage10 } from '../../../../../utils/cap1/validationSchemas';

export interface FormValues {
    A1: FormTemplate;
    A2: FormTemplate;
    A3: FormTemplate;
    A4: FormTemplate;
    A5: FormTemplate;
}

export const FormPage10 = () => {
    const navigation = useNavigation();
    const { saveAllData } = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = {
        ...getInitialValuesPage10(),
    };

    const [mode, setMode] = useState<'date' | 'time'>('date');
    const [show, setShow] = useState(false);
    const [pickerField, setPickerField] = useState<keyof FormValues | null>(null);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date, setFieldValue?: (field: string, value: any) => void) => {
        setShow(false);
        if (selectedDate && setFieldValue && pickerField) {
            const formattedValue = mode === 'date' 
                ? selectedDate.toLocaleDateString() 
                : selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            console.log(`Selected ${pickerField}: ${formattedValue}`);
            setFieldValue(`${pickerField}.response[0].responseuser[0]`, formattedValue);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
                <View style={globalStyles.CapTitle}>
                    <Text style={globalStyles.Title}>Información del Encuestador</Text>
                </View>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchemaPage10}
                    onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        console.log('Submitting form with values:', values);
                        try {
                            await saveAllData(`${fileName}.json`, values, finalSurveyId);
                            console.log('Data saved successfully');
                        } catch (error) {
                            console.error('Error saving data:', error);
                        } finally {
                            setSubmitting(false);
                            navigation.navigate('Home' as never);
                        }
                    }}
                >
                    {({ setFieldValue, values, errors, touched, handleSubmit }) => (
                        <View>
                            {/* A1 Input */}
                            <InputComponent
                                info='A1' 
                                textTitle='A1. ¿Por qué no existen esas alianzas o protocolos de coordinación?'
                                handleChange={(value: string) => {
                                    console.log('A1 answer changed to:', value);
                                    setFieldValue('A1.response[0].responseuser[0]', value);
                                }}
                                handleBlur={() => console.log('A1 input blurred')}
                                values={values.A1.response[0].responseuser} 
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="A1" />

                            {/* Date Picker for A2 */}
                            <View>
                                <Text style={globalStyles.questionTitle}>A2. Fecha</Text>
                                <Button 
                                    title="Seleccionar Fecha" 
                                    onPress={() => { setShow(true); setMode('date'); setPickerField('A2'); }} 
                                />
                                {show && pickerField === 'A2' && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={new Date()}
                                        mode="date"
                                        display="default"
                                        onChange={(event, selectedDate) => onChange(event, selectedDate, setFieldValue)}
                                    />
                                )}
                                <Text>Fecha seleccionada: {values.A2.response[0].responseuser[0] || "Ninguna"}</Text>
                            </View>

                            {/* Time Picker for A3 (Start Time) */}
                            <View>
                                <Text style={globalStyles.questionTitle}>A3. Hora de Inicio</Text>
                                <Button 
                                    title="Seleccionar hora de inicio" 
                                    onPress={() => { setShow(true); setMode('time'); setPickerField('A3'); }} 
                                />
                                {show && pickerField === 'A3' && (
                                    <DateTimePicker
                                        testID="timePickerStart"
                                        value={new Date()}
                                        mode="time"
                                        is24Hour={true}
                                        display="default"
                                        onChange={(event, selectedDate) => onChange(event, selectedDate, setFieldValue)}
                                    />
                                )}
                                <Text>Hora de inicio seleccionada: {values.A3.response[0].responseuser[0] || "Ninguna"}</Text>
                            </View>

                            {/* Time Picker for A4 (End Time) */}
                            <View>
                                <Text style={globalStyles.questionTitle}>A4. Hora de Finalización</Text>
                                <Button 
                                    title="Seleccionar hora de finalización" 
                                    onPress={() => { setShow(true); setMode('time'); setPickerField('A4'); }} 
                                />
                                {show && pickerField === 'A4' && (
                                    <DateTimePicker
                                        testID="timePickerEnd"
                                        value={new Date()}
                                        mode="time"
                                        is24Hour={true}
                                        display="default"
                                        onChange={(event, selectedDate) => onChange(event, selectedDate, setFieldValue)}
                                    />
                                )}
                                <Text>Hora de finalización seleccionada: {values.A4.response[0].responseuser[0] || "Ninguna"}</Text>
                            </View>

                            {/* DropDown for A5 */}
                            <DropDownComponent
                                values={values.A5.response[0].responseuser}
                                setFieldValue={(value) => {
                                    console.log('A5 answer changed to:', value);
                                    setFieldValue('A5.response[0].responseuser[0]', value);
                                }}
                                qTitle='A5. Novedades en campo'
                                opValues={['Completa', 'Incompleta', 'Rechazó']}
                            />
                            <ErrorMessage errors={errors} touched={touched} fieldName="A5"/>
                            <View style={globalStyles.buttonsBanner}>
                                <Prevcomponent onPrevPressed={() => navigation.navigate('page9' as never)} />
                                <NextComponent onNextPress={handleSubmit} />
                            </View>
                        </View>
                    )}
                </Formik>


            </ScrollView>
        </KeyboardAvoidingView>
    );
};
