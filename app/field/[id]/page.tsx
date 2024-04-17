"use client";

import { Box, Select, TextInput, Checkbox } from "@mantine/core";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { FieldData } from "@/utils/client/dataInterface";
import { useParams } from "next/navigation";
import { fieldbuilder_Post } from "@/app/formbuilder/action_formbuilder";

export default function FieldForm() {
  const params = useParams();
  const { register, control, handleSubmit } = useForm<FieldData>();
  const { fields, append, remove } = useFieldArray({
    name: "field",
    control,
  });
  const onSubmit = (data: FieldData) => {
    fieldbuilder_Post(data);
    console.log("client data", data);
  };
  console.log("test", params?.id);
  console.log("params", params);
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
              field_label: "",
              field_type: "",
              field_required: true,
              field_order: 0,
              form_id: params?.id,
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
