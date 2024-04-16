"use client";

import { createClient } from "@/utils/supabase/client";
import { Box, Container, Title } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "@/utils/client/dataInterface";

export default function FormBuilder() {
  const supabase = createClient();
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (dataForm) => {
    const { data, error } = await supabase.from("form").insert([dataForm]);
    console.log(data);
    console.log(error);
  };

  return (
    <Box>
      <Title>Form Builder </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <label htmlFor="">Form Name</label>
          <input {...register("formname", { required: true, maxLength: 20 })} />
          <label htmlFor="">Form Description</label>
          <input
            {...register("formdescription", { required: true, maxLength: 20 })}
          />
          {/* <label htmlFor="">Label</label>
          <input {...register("label", { required: true, maxLength: 20 })} />
          <label htmlFor="">Type</label>
          <select {...register("type")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <label htmlFor="">Required</label>
          <select {...register("required")}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label htmlFor="">Order</label>
          <input
            {...register("ordernumber", { required: true, maxLength: 20 })}
          /> */}

          <input type="submit" value={"Submit"} />
        </Container>
      </form>
    </Box>
  );
}
