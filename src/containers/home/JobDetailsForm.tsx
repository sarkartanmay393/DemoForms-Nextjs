import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormInput from "../../components/formComponents/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PageNumbers } from "../../interface/home";
import {IJobDetails, InitialValueProps, InitialValuePropsClass} from "../../interface/forms";
import {useData} from "@containers/home/DataProvider";

const JobDetailsForm: React.FC<{
  handleTab: (n: PageNumbers) => void;
}> = ({ handleTab }) => {

    const stateContext = useData();

  const {
      handleChange,
      errors,
      touched,
      handleBlur,
      handleSubmit,
      values
  } = useFormik<IJobDetails>({
      initialValues: {
        jobTitle: "",
        jobDetails: "",
        jobLocation: "",
      },
      validationSchema: Yup.object().shape({
        jobTitle: Yup.string().required("Job Title is required"),
        jobDetails: Yup.string().required("Job Details is required"),
        jobLocation: Yup.string().required("Job Location is required"),
      }),
      onSubmit: (values) => {
          let tmp = new InitialValuePropsClass(stateContext.state);
          tmp.jobDetails.jobDetails = values.jobDetails;
          tmp.jobDetails.jobTitle = values.jobTitle;
          tmp.jobDetails.jobLocation = values.jobLocation;
          stateContext.setState(tmp);
          handleTab(2);
      },
    });

  return (
    <Box width="100%" as="form" onSubmit={handleSubmit as any}>
      <Box width="100%">
        <FormInput
          label="Job Title"
          placeholder="Enter job title"
          name="jobTitle"
          onChange={(e) => {
              let tmp = new InitialValuePropsClass(stateContext.state);
              tmp.jobDetails.jobTitle = e.target.value;
              stateContext.setState(tmp);
              handleChange(e);
          }}
          onBlur={handleBlur}
          value={values?.jobTitle}
          error={errors?.jobTitle}
          touched={touched?.jobTitle}
        />
        <FormInput
          label="Job Details"
          placeholder="Enter job details"
          name="jobDetails"
          onChange={(e) => {
              let tmp = new InitialValuePropsClass(stateContext.state);
              tmp.jobDetails.jobDetails = e.target.value;
              stateContext.setState(tmp);
              handleChange(e);
          }}
          onBlur={handleBlur}
          value={values?.jobDetails}
          error={errors?.jobDetails}
          touched={touched?.jobDetails}
        />
        <FormInput
          label="Job Location"
          name="jobLocation"
          placeholder="Enter job location"
          onChange={(e) => {
              let tmp = new InitialValuePropsClass(stateContext.state);
              tmp.jobDetails.jobLocation = e.target.value;
              stateContext.setState(tmp);
              handleChange(e);
          }}
          onBlur={handleBlur}
          error={errors?.jobLocation}
          touched={touched?.jobLocation}
          value={values?.jobLocation}
        />
        <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
          <Button colorScheme="gray" type="button" onClick={() => {
              handleTab(0);
          }}>
            Previous
          </Button>
          <Button colorScheme="red" type="submit">
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default JobDetailsForm;
