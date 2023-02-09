import React, { createContext, useContext, useState } from "react";
import {InitialValueProps} from "@src/interface/forms";
import {any} from "prop-types";

const initialValues: InitialValueProps = {
  requisitionDetails: {
    gender: "",
    noOfOpenings: 0,
    requisitionTitle: "",
    urgency: "",
  },
  jobDetails: {
    jobDetails: "",
    jobLocation: "",
    jobTitle: "",
  },
  interviewSettings: {
    interviewDuration: "",
    interviewLanguage: "",
    interviewMode: "",
  },
};

const DataContext = createContext<{
  state: InitialValueProps;
  setState: React.Dispatch<React.SetStateAction<InitialValueProps>>;
}>({
  state: {
    requisitionDetails: {
      gender: "",
      noOfOpenings: 0,
      requisitionTitle: "",
      urgency: "",
    },
    jobDetails: {
      jobDetails: "",
      jobLocation: "",
      jobTitle: "",
    },
    interviewSettings: {
      interviewDuration: "",
      interviewLanguage: "",
      interviewMode: "",
    },
  },
  setState(value: ((prevState: InitialValueProps) => InitialValueProps) | InitialValueProps): void {},
});

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(initialValues);

  return (
    <DataContext.Provider value={{ state, setState }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export default DataProvider;
