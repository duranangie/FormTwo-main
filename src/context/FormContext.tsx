import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FormContextType {
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps{
    children: ReactNode;
}

export const FormProvider = ({ children }:FormProviderProps) => {
  const [formData, setFormData] = useState({}); // Aquí guardas los datos del formulario

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};

