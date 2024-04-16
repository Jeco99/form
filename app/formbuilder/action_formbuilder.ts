"use server";

import { createClient } from "@/utils/supabase/server";
import { FormData } from "@/utils/client/dataInterface";
import { redirect } from "next/navigation";
// import { FieldData } from "@/utils/client/dataInterface";

export async function formbuilder_Post(dataForm: FormData) {
  const supabase = createClient();

  const { error, status } = await supabase.from("form").insert([dataForm]);
  const { data } = await supabase.from("form").select("form_id");
  console.log(data);
  if (error) {
    console.log("Data can't be insert");
  }

  if (status === 201) {
    redirect("/field");
  }
}

// export async function fieldbuilder_post(fieldForm: FieldData) {
//   const supabase = createClient();
// }
