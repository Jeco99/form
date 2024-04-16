"use client";

import { Box, Select, TextInput, Checkbox } from "@mantine/core";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { FieldData } from "@/utils/client/dataInterface";

export default function FieldForm() {
  const { register, control, handleSubmit } = useForm<FieldData>();
  const { fields, append, remove } = useFieldArray({
    name: "field",
    control,
  });
  const onSubmit = (data: FieldData) => console.log(data);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <section className={"section"} key={field.id}>
                <TextInput
                  label="Label"
                  placeholder="label"
                  {...register(`field.${index}.form_label` as const, {
                    required: true,
                  })}
                />
                <Controller
                  name={`field.${index}.form_type` as const}
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
                  {...register(`field.${index}.form_required` as const)}
                  label="Required"
                />

                <TextInput
                  label="Order"
                  type="number"
                  placeholder="Order"
                  {...register(`field.${index}.form_order` as const, {
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
          onClick={() =>
            append({
              form_label: "",
              form_type: "",
              form_required: true,
              form_order: 0,
            })
          }
        >
          APPEND
        </button>
        <input type="submit" />
      </form>
    </Box>
  );
}
