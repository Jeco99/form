"use client";

import { Box, Container, TextInput, Title } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "@/utils/client/dataInterface";
import { formbuilder_Post } from "./action_formbuilder";

export default function FormBuilder() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (dataForm) => {
    formbuilder_Post(dataForm);
  };

  return (
    <Box>
      <Title>Form Builder </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <TextInput
            label="Form Name"
            {...register("formname", { required: true })}
          />
          <TextInput
            label="Form Description"
            {...register("formdescription", { required: true })}
          />
          <input type="submit" value={"Submit"} />
        </Container>
      </form>
    </Box>
  );
}
