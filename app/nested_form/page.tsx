"use client";

import * as React from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";

type FieldData = {
  form_name: string;
  form_description: string;
  field: {
    field_label: string;
    field_type: string;
    field_required: boolean;
    field_order: number;
  }[];
};

export default function NestedForm() {
  const { control, handleSubmit } = useForm<FieldData>();

  const { fields, append, update } = useFieldArray({
    control,
    name: "field",
  });

  return (
    <>
      <h1>Edit</h1>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormName_And_FormDescription update={update} control={control} />
        {fields.map((field, index) => (
          <>
            <FieldInput
              key={field.id}
              control={control}
              update={update}
              index={index}
              value={field}
            />
          </>
        ))}

        <button
          type="button"
          onClick={() => {
            append({ firstName: "" });
          }}
        >
          append
        </button>
        <input type="submit" />
      </form>
    </>
  );
}

const FormName_And_FormDescription = ({ update }) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <input
        placeholder="Form Name"
        {...register("form_name", { required: true })}
      />
      <input
        placeholder="Form Description"
        {...register("form_decription", { required: true })}
      />

      <button type="button" onClick={handleSubmit((data) => update(data))}>
        Submit
      </button>
    </>
  );
};

const Display = ({ control, index }) => {
  const data = useWatch({
    control,
    name: `array.${index}`,
  });
  return <p>{data?.firstName}</p>;
};

const FieldInput = ({ update, index, value, control }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: value,
  });

  return (
    <div>
      <h1>Form Name</h1>
      <input
        placeholder="label"
        {...register(`field_label`, { required: true })}
      />
      <input
        placeholder="type"
        {...register(`field_type`, { required: true })}
      />
      <input
        placeholder="required"
        {...register(`field_required`, { required: true })}
      />
      <input
        placeholder="order"
        {...register(`field_order`, { required: true })}
      />

      <button
        type="button"
        onClick={handleSubmit((data) => update(index, data))}
      >
        Submit
      </button>
    </div>
  );
};
