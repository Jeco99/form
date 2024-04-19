"use server";

import { createClient } from "@/utils/supabase/client";
import { FormData } from "./page";
import { redirect } from "next/navigation";
export default async function createForm(dataForm: FormData) {
  try {
    const supabase = createClient();
    //console.log(dataForm);
    const { data, error } = await supabase.rpc("data_Insertion", dataForm);
    console.log("data", data);
    if (error) {
      console.log("error", error);
      throw error;
    }

    if (data) {
      console.log("Data Successfully Inserted");
      redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
}
