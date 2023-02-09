import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormSelect from "../../components/formComponents/FormSelect";
import { useFormik } from "formik";
import { PageNumbers } from "../../interface/home";
import {IInterViewSettings, InitialValueProps} from "../../interface/forms";
import {
  interviewDurationOptions,
  interviewLanguageOptions,
  interviewModeOptions,
} from "./constants";
import {useData} from "@containers/home/DataProvider";

const InterviewDetailsForm: React.FC<{
  handleTab: (n: PageNumbers) => void;
}> = ({ handleTab }) => {


  const stateContext: {
    state: InitialValueProps,
    setState: React.Dispatch<React.SetStateAction<InitialValueProps>>
  } = useData();

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
    onSubmit: (values) => {
      const saveValuesToState = () => {
        stateContext.setState({
          requisitionDetails: {
            gender: stateContext.state.requisitionDetails.gender,
            noOfOpenings: stateContext.state.requisitionDetails.noOfOpenings,
            requisitionTitle: stateContext.state.requisitionDetails.requisitionTitle,
            urgency: stateContext.state.requisitionDetails.urgency,
          },
          jobDetails: {
            jobDetails: stateContext.state.jobDetails.jobDetails,
            jobLocation: stateContext.state.jobDetails.jobLocation,
            jobTitle: stateContext.state.jobDetails.jobTitle,
          },
          interviewSettings: {
            interviewDuration: values.interviewDuration,
            interviewLanguage: values.interviewLanguage,
            interviewMode: values.interviewMode,
          },
        });
      };
      saveValuesToState();
      console.log({ values });
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
          onChange={setFieldValue}
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
          onChange={setFieldValue}
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
          onChange={setFieldValue}
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
