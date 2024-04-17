"use client";

import React from "react";
import { useForm, useWatch, useFieldArray, Control } from "react-hook-form";

type FormValues = {
  data: { name: string }[];
};

const ConditionField = ({
  control,
  index,
  register,
}: {
  control: Control<FormValues>;
  index: number;
}) => {
  const output = useWatch({
    name: "data",
    control,
    defaultValue: "yay! I am watching you :)",
  });

  return (
    <>
      {output[index]?.name === "bill" && (
        <input {...register(`data[${index}].conditional`)} />
      )}
      <input
        {...register(`data[${index}].easyConditional`)}
        style={{ display: output[index]?.name === "bill" ? "block" : "none" }}
      />
    </>
  );
};
