import React, { createContext, ReactNode, useState } from 'react'

interface SurveyProps{
    surveyId: string | null;
    setSurveyId: (id: string) => void;
}

interface SurveyProviderProps{
    children: ReactNode;
}

export const SurveyContext = createContext<SurveyProps>({
        surveyId: null,
        setSurveyId: () => {},
    });

export const SurveyProvider = ({children}:SurveyProviderProps) => {

    const [surveyId, setSurveyId] = useState<string | null>(null)

  return (
    <SurveyContext.Provider value={{surveyId,setSurveyId}}>
        {children}
    </SurveyContext.Provider>
  )
}
