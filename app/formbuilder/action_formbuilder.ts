"use server";

import { createClient } from "@/utils/supabase/server";
import { FieldData, FormData } from "@/utils/client/dataInterface";

export async function formbuilder_Post(dataForm: FormData) {
  const supabase = createClient();

  const { error, status } = await supabase
    .from("form_table")
    .insert([dataForm]);
  const { data } = await supabase.from("form_table").select();

  if (error) {
    console.log("Data can't be insert");
  }

  if (status === 201 && data) {
    const formLength = data?.length;
    const form_id = data[formLength - 1];
    const id = form_id["form_id"];
    return id;
  }
}

export async function get_id_form_name(id: string) {
  return id;
}

export async function fieldbuilder_Post(dataForm: FieldData) {
  const supabase = createClient();

  const { error, status } = await supabase
    .from("field_table")
    .insert(dataForm.field);

  if (error) {
    console.log("Data can't be insert");
  }

  if (status === 201) {
    console.log("Insert");
  }
}
