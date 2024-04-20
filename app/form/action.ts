"use server";

import { createClient } from "@/utils/supabase/client";
import { FormData } from "./page";

export default async function createForm(dataForm: FormData) {
  try {
    const supabase = createClient();
    console.log(dataForm);
    const { data, error } = await supabase.rpc("greet2", {
      form_name: dataForm.form_name,
      form_description: dataForm.form_description,
      field_table: dataForm.field,
    });
    console.log("data", data);
    if (error) {
      console.log("try error", error);
    }

    if (data) {
      console.log("Data Successfully Inserted");
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
