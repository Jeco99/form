"use client";

import { TextInput, Select, Checkbox, Container } from "@mantine/core";
import * as React from "react";
import {
  useForm,
  useFieldArray,
  Controller,
  SubmitHandler,
} from "react-hook-form";
import {
  formbuilder_Post,
  get_id_form_name,
} from "../formbuilder/action_formbuilder";

type FieldData = {
  field: {
    field_label: string;
    field_type: string;
    field_required: boolean;
    field_order: number;
  }[];
};

type FormData = {
  form_name: string;
  form_description: string;
};

// type SelectData = {
//   select: {
//     select_data: string;
//  }[]
// }

export default function NestedForm() {
  const { control, handleSubmit } = useForm<FieldData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "field",
  });

  return (
    <>
      <FormInput />
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {fields.map((field, index) => (
          <>
            <FieldInput
              key={field.id}
              control={control}
              index={index}
              remove={remove}
            />
          </>
        ))}

        <button
          type="button"
          onClick={() => {
            append({
              field_label: "",
              field_type: "",
              field_required: true,
              field_order: 0,
            });
          }}
        >
          append
        </button>
        <input type="submit" />
      </form>
    </>
  );
}
const FormInput = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (dataForm) => {
    formbuilder_Post(dataForm);
    const id = await formbuilder_Post(dataForm);

    await get_id_form_name(id);
  };
  return (
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
        <input type="submit" value={"Submit"} />
      </Container>
    </form>
  );
};

const FieldInput = ({ control, remove, index }) => {
  const { register } = useForm();
  return (
    <div>
      <h1>Field</h1>

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
            data={["text", "number", "date", "select", "multiSelect"]}
          />
        )}
      />

      <Checkbox
        {...register(`field.${index}.field_required` as const)}
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
        Remove
      </button>
    </div>
  );
};
