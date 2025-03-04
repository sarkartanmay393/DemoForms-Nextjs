import { FormControlProps, InputProps } from "@chakra-ui/react";
import { FormikErrors, FormikTouched } from "formik";
import React from "react";

export interface InitialValueProps {
  requisitionDetails: {
    gender: string;
    noOfOpenings: number;
    requisitionTitle: string;
    urgency: string;
  },
  jobDetails: {
    jobDetails: string;
    jobLocation: string;
    jobTitle: string;
  },
  interviewSettings: {
    interviewDuration: string;
    interviewLanguage: string;
    interviewMode: string;
  },
};

export class InitialValuePropsClass implements InitialValueProps {
  constructor(InitialValues: InitialValueProps) {
    this.interviewSettings = InitialValues.interviewSettings;
    this.jobDetails = InitialValues.jobDetails;
    this.requisitionDetails = InitialValues.requisitionDetails;
  }
  interviewSettings: {
    interviewDuration: string;
    interviewLanguage: string;
    interviewMode: string
  };
  jobDetails: {
    jobDetails: string;
    jobLocation: string;
    jobTitle: string
  };
  requisitionDetails: {
    gender: string;
    noOfOpenings: number;
    requisitionTitle: string;
    urgency: string
  };
}

export interface IFormInputProps {
  name: string;
  label?: React.ReactNode;
  placeholder?: string;
  type?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?:
  | string
  | string[]
  | FormikErrors<any>
  | FormikErrors<any>[]
  | undefined;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  inputProps?: InputProps;
  wrapperProps?: FormControlProps;
  children?: React.ReactNode;
  helperText?: React.ReactNode;
}

export type ISelectOption = {
  label: string;
  value: any;
} | null;

export interface IRequisitionDetailsValues {
  requestTitle: string;
  owner: string;
  hiringManager: string;
  noOfOpenings: string;
  urgency: string;
  employmentType: string;
  prefferedGender: string;
  status: string;
}

export interface IJobDetailsValues {
  jobTitle: string;
  jobDetails: string;
  jobLocation: string;
}

export interface IInterviewSettingsValues {
  interviewMode: string;
  interviewDuration: string;
  interviewLanguage: string;
}


export interface IInterViewSettings {
  interviewMode: string;
  interviewDuration: string;
  interviewLanguage: string;
}

export interface IJobDetails {
  jobTitle: string;
  jobDetails: string;
  jobLocation: string;
}

export interface IRequisitionDetails {
  requisitionTitle: string;
  noOfOpenings: number;
  urgency: string;
  gender: string;
}