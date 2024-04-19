"use client";

import { fetchDataType } from "@/app/displayform/displayform";
import { Box } from "@mantine/core";

export default function FormCard({
  form_name,
  form_description,
  field_table,
}: // form_id,
fetchDataType) {
  return (
    <>
      <Box style={{ border: "1px solid black" }}>
        <button>Delete- not work</button>
        <h1>{form_name}</h1>
        <p>{form_description}</p>
        {field_table.map((items) => {
          return (
            <div key={items.field_id}>
              <label htmlFor="">
                <span>{items.field_order}</span>
                {items.field_label}
              </label>
              <input
                type={items.field_type}
                required={items.field_is_required}
              />
            </div>
          );
        })}
      </Box>
    </>
  );
}
