import React, {createContext, useContext, useRef, useState} from "react";
import {InitialValueProps} from "@src/interface/forms";

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
  state: initialValues,
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
