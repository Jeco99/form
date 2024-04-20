"use client";

import {
  TextInput,
  Checkbox,
  Select,
  Container,
  Button,
  Box,
  Title,
  Group,
} from "@mantine/core";
import * as React from "react";
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  Controller,
} from "react-hook-form";
import createForm from "./action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type FormData = {
  form_name: string;
  form_description: string;
  field: {
    field_label: string;
    field_type: string;
    field_is_required: boolean;
    field_order: number;
  }[];
};

export default function FieldForm() {
  const { register, control, handleSubmit, watch } = useForm<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "field",
  });
  const [errorInsertion, setErrorInsertion] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (dataForm) => {
    const data = await createForm(dataForm);
    if (data.success) {
      router.push("/displayform");
    }

    if (data.error) {
      setErrorInsertion(data.error);
    }
  };
  return (
    <Container my={30}>
      <Link href={"/displayform"}>
        <Button> Go Back</Button>
      </Link>
      <Box my="xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title ta={"center"}>Form Builder</Title>
          {errorInsertion}
          <Container>
            <TextInput
              label="Form Name"
              {...register("form_name", { required: true })}
            />
            <TextInput
              label="Form Description"
              {...register("form_description", { required: true })}
            />
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <section className={"section"} key={field.id}>
                    <TextInput
                      label="Label"
                      placeholder="label"
                      {...register(`field.${index}.field_label` as const, {
                        required: true,
                      })}
                    />
                    <Controller
                      name={`field.${index}.field_type` as const}
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          label="Type"
                          data={[
                            "text",
                            "number",
                            "date",
                            "select",
                            "multiselect",
                          ]}
                        />
                      )}
                    />

                    {(watch(`field.${index}.field_type`) === "select" ||
                      watch(`field.${index}.field_type`) === "multiSelect") && (
                      <h1>Select</h1>
                    )}

                    <Checkbox
                      {...register(`field.${index}.field_is_required` as const)}
                      label="Required"
                    />

                    <TextInput
                      label="Order"
                      type="number"
                      placeholder="Order"
                      {...register(`field.${index}.field_order` as const, {
                        valueAsNumber: true,
                        required: true,
                      })}
                    />
                    <Button type="button" onClick={() => remove(index)} mt={9}>
                      DELETE
                    </Button>
                  </section>
                </div>
              );
            })}
            <Group mt={20}>
              <Button
                type="button"
                onClick={() => {
                  append({
                    field_label: "",
                    field_type: "",
                    field_is_required: true,
                    field_order: 0,
                  });
                }}
              >
                append
              </Button>
              <input
                type="submit"
                style={{
                  backgroundColor: "#0077B6",
                  borderRadius: "5px",
                  padding: "5px 15px",
                  color: "white",
                  border: "1px solid white",
                }}
              />
            </Group>
          </Container>
        </form>
      </Box>
    </Container>
  );
}
