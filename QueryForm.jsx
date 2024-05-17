import React from "react";
import {
  useForm,
  FormHeader,
  Form,
  Label,
  Textfield,
  Button,
} from "@forge/react";

export const QueryForm = () => {
  const { register, getFieldId, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Use invoke() to call your resolver that queries for the email
    // https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/invoke/
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>Search guest emails here.</FormHeader>
      <Label labelFor={getFieldId("searchemail")}>Search for:</Label>
      <Textfield {...register("searchemail")} />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
