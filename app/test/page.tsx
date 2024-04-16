// "use client";

// import * as React from "react";
// import { useForm, useFieldArray } from "react-hook-form";

// type FormValues = {
//   fields: {
//     label: string;
//     type: string;
//     required: boolean;
//   }[];
// };

// // const Total = ({ control }: { control: Control<FormValues> }) => {
// //   const formValues = useWatch({
// //     name: "cart",
// //     control,
// //   });
// //   const total = formValues.reduce(
// //     (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
// //     0
// //   );
// //   return <p>Total Amount: {total}</p>;
// // };

// export default function App() {
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>();
//   const { fields, append, remove } = useFieldArray({
//     name: "fields",
//     control,
//   });
//   const onSubmit = (data: FormValues) => console.log(data);

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {fields.map((field, index) => {
//           return (
//             <div key={field.id}>
//               <section className={"section"} key={field.id}>
//                 <input
//                   placeholder="label"
//                   {...register(`fields.${index}.label`, {
//                     required: true,
//                   })}
//                 />
//                 <input
//                   placeholder="type"
//                   type="number"
//                   {...register(`cart.${index}.quantity` as const, {
//                     valueAsNumber: true,
//                     required: true,
//                   })}
//                   className={errors?.cart?.[index]?.quantity ? "error" : ""}
//                 />
//                 <input
//                   placeholder="value"
//                   type="number"
//                   {...register(`cart.${index}.price` as const, {
//                     valueAsNumber: true,
//                     required: true,
//                   })}
//                   className={errors?.cart?.[index]?.price ? "error" : ""}
//                 />
//                 <button type="button" onClick={() => remove(index)}>
//                   DELETE
//                 </button>
//               </section>
//             </div>
//           );
//         })}

//         {/* <Total control={control} /> */}

//         <button
//           type="button"
//           onClick={() =>
//             append({
//               name: "",
//               quantity: 0,
//               price: 0,
//             })
//           }
//         >
//           APPEND
//         </button>
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

"use client";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { TextInput, Group, Select, Checkbox } from "@mantine/core";

export type FormField = {
  formName: string;
  formDescription: string;
  formfields: {
    label: string;
    type: "text" | "number" | "date" | "select" | "multiSelect";
    options?: string;
    required: boolean;
  }[];
};

export default function FormBuilder() {
  const { register, control, handleSubmit, watch } = useForm<FormField>({
    defaultValues: {
      formfields: [
        { label: "test", type: "text", options: "", required: false },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "formfields",
    control,
  });
  const onSubmit = (data: FormField) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput {...register("formName")} placeholder="form name" />
        <TextInput
          {...register("formDescription")}
          placeholder="form description"
        />
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <Group key={field.id}>
                <TextInput
                  placeholder="name"
                  label="label"
                  {...register(`formfields.${index}.label` as const)}
                  defaultValue={field.label}
                />
                <Controller
                  name={`formfields.${index}.type` as const}
                  control={control}
                  defaultValue={field.type}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Type"
                      data={["text", "number", "date", "select", "multiSelect"]}
                    />
                  )}
                />
                {(watch(`formfields.${index}.type`) === "select" ||
                  watch(`formfields.${index}.type`) === "multiSelect") && (
                  <TextInput
                    {...register(`formfields.${index}.options` as const)}
                    label="Options (comma-separated)"
                  />
                )}
                <Checkbox
                  {...register(`formfields.${index}.required` as const)}
                  label="Required"
                />
                <button type="button" onClick={() => remove(index)}>
                  DELETE
                </button>
              </Group>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() =>
            append({
              label: "",
              type: "text",
              options: "",
              required: false,
            })
          }
        >
          APPEND
        </button>
        <input type="submit" />
      </form>
    </div>
  );
}
