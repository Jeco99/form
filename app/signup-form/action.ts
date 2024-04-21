"use server";

import { createClient } from "@/utils/supabase/client";
import { UserData } from "./page";

export async function signup(dataForm: UserData) {
  try {
    const supabase = createClient();

    const signup_data = {
      user_email: dataForm.user_email,
      user_password: dataForm.user_password,
      user_firstname: dataForm.user_firstname,
      user_lastname: dataForm.user_lastname,
    };

    const { data, error } = await supabase
      .from("user_table")
      .insert([signup_data])
      .select();

    if (data) {
      return { message: "Successfully Inserted", isSuccess: true };
    }

    if (error) {
      console.log(error);
      return { message: "Failed to insert", isSuccess: false };
    }
  } catch (error) {
    console.log("Catch Error", error);
  }
}
