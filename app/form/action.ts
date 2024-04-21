"use server";

import { createClient } from "@/utils/supabase/client";
import { FormData } from "./page";

export default async function createForm(dataForm: FormData) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.rpc("insertform", {
      form_name: dataForm.form_name,
      form_description: dataForm.form_description,
      field_table: dataForm.field,
    });
    console.log(" server data", data);
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
