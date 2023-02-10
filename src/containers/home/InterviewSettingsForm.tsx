import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormSelect from "../../components/formComponents/FormSelect";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PageNumbers } from "../../interface/home";
import {IInterViewSettings, InitialValueProps, InitialValuePropsClass} from "../../interface/forms";
import {
  interviewDurationOptions,
  interviewLanguageOptions,
  interviewModeOptions,
} from "./constants";
import {useData} from "@containers/home/DataProvider";

const InterviewDetailsForm: React.FC<{
  handleTab: (n: PageNumbers) => void;
}> = ({ handleTab }) => {

  const stateContext = useData();

  const {
    errors,
    touched,
    handleSubmit,
    values,
    setFieldTouched,
    setFieldValue,
  } = useFormik<IInterViewSettings>({
    initialValues: {
      interviewMode: "",
      interviewDuration: "",
      interviewLanguage: "",
    },
      validationSchema: Yup.object().shape({
          interviewMode: Yup.string().required("Interview mode is required"),
          interviewDuration: Yup.string().required("Interview duration is required"),
          interviewLanguage: Yup.string().required("Interview language is required"),
      }),
    onSubmit: (values) => {
      let tmp = new InitialValuePropsClass(stateContext.state);
      tmp.interviewSettings.interviewDuration = values.interviewDuration;
      tmp.interviewSettings.interviewMode = values.interviewMode;
      tmp.interviewSettings.interviewLanguage = values.interviewLanguage;
      stateContext.setState(tmp);
      alert("Form successfully submitted");
    },
  });

  return (
    <Box width="100%" as="form" onSubmit={handleSubmit as any}>
      <Box width="100%">
        <FormSelect
          label="Interview Mode"
          placeholder="Select interview mode"
          name="interviewMode"
          options={interviewModeOptions}
          onChange={(name: string, value: string) => {
            setFieldValue(name, value);
            let tmp = new InitialValuePropsClass(stateContext.state);
            tmp.interviewSettings.interviewMode = value;
            stateContext.setState(tmp);
          }}
          onBlur={setFieldTouched}
          value={values?.interviewMode}
          error={errors?.interviewMode}
          touched={touched?.interviewMode}
        />
        <FormSelect
          label="Interview Duration"
          placeholder="Select interview duration"
          name="interviewDuration"
          options={interviewDurationOptions}
          onChange={(name: string, value: string) => {
            setFieldValue(name, value);
            let tmp = new InitialValuePropsClass(stateContext.state);
            tmp.interviewSettings.interviewDuration = value;
            stateContext.setState(tmp);
          }}
          onBlur={setFieldTouched}
          value={values?.interviewDuration}
          error={errors?.interviewDuration}
          touched={touched?.interviewDuration}
        />
        <FormSelect
          label="Job Location"
          name="interviewLanguage"
          placeholder="Select interview language"
          options={interviewLanguageOptions}
          onChange={(name: string, value: string) => {
            setFieldValue(name, value);
            let tmp = new InitialValuePropsClass(stateContext.state);
            tmp.interviewSettings.interviewLanguage = value;
            stateContext.setState(tmp);
          }}
          onBlur={setFieldTouched}
          error={errors.interviewLanguage}
          touched={touched.interviewLanguage}
          value={values.interviewLanguage}
        />
        <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
          <Button colorScheme="gray" type="button" onClick={() => handleTab(1)}>
            Previous
          </Button>
          <Button colorScheme="red" type="submit">
            Submit
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default InterviewDetailsForm;
