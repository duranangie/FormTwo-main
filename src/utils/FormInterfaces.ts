export interface Response{
    additionalText: string;
    subQuestions: string[];
    subQuestion3Responses: any;
    subQuestion1Responses: any;
    subQuestion2Responses: any;
    idoptresponse: string,
    responseuser: string[],
}
  
export interface FormTemplate{
qId: string;
surveyId: "2",
chapterId: string,
qFather: string;
response:[Response];
}