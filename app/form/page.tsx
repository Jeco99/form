"use client";

import { TextInput, Checkbox, Select, Container } from "@mantine/core";
import * as React from "react";
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  Controller,
} from "react-hook-form";
import createForm from "./action";
import Link from "next/link";

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

  // useEffect(() => {
  //   const rpc = async () => {
  //     const data = await createForm();
  //     console.log(data);
  //   };
  //   rpc();
  // }, []);

  const onSubmit: SubmitHandler<FormData> = (dataForm) => {
    createForm(dataForm);
  };
  return (
    <>
      <Link href={"/displayform"}>
        <button> Go Back</button>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                    <>
                      <h1>Wait</h1>
                    </>
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
                  <button type="button" onClick={() => remove(index)}>
                    DELETE
                  </button>
                </section>
              </div>
            );
          })}
          <button
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
          </button>
          <input type="submit" />
        </Container>
      </form>
    </>
  );
}
