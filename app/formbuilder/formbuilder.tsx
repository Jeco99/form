"use client";

import { Box, Container, TextInput, Title } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "@/utils/client/dataInterface";
import { formbuilder_Post } from "./action_formbuilder";
import { type User } from "@supabase/supabase-js";

export default function FormBuilder({ user }: { user: User | null }) {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (dataForm) => {
    formbuilder_Post(dataForm);
  };

  return (
    <Box>
      <Title>Form Builder </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Title>{user?.email}</Title>
          <TextInput
            label="Form Name"
            {...register("form_name", { required: true })}
          />
          <TextInput
            label="Form Description"
            {...register("form_description", { required: true })}
          />
          <input type="submit" value={"Submit"} />
        </Container>
      </form>
    </Box>
  );
}
