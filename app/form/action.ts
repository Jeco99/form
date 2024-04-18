"use server";

import { createClient } from "@/utils/supabase/client";
import { FormData } from "./page";
import { redirect } from "next/navigation";
export default async function createForm(dataForm: FormData) {
  try {
    const supabase = createClient();
    console.log(dataForm);
    const { data, error } = await supabase.rpc("inserteddata", dataForm);

    if (error) {
      throw error;
    }

    if (data) {
      console.log("Data Successfully Inserted");
      redirect("/");
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}
