import React from "react";
import {
  useForm,
  FormHeader,
  Form,
  Label,
  Textfield,
  Button,
} from "@forge/react";

export const InputForm = () => {
  // https://developer.atlassian.com/platform/forge/ui-kit/hooks/use-form/
  const { register, handleSubmit, getFieldId } = useForm();

  const onSubmit = (data) => {
    // Use invoke() to call the resolver that registers the names
    // https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/invoke/
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>
        Input a guest's email and their corresponding full name here.
      </FormHeader>
      <Label labelFor={getFieldId("email")}>Email:</Label>
      <Textfield {...register("email")} />
      <Label labelFor={getFieldId("fullname")}>Name:</Label>
      <Textfield {...register("fullname")} />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
