"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

//Create a function that allows the user to sign in
export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const { error } = await supabase.auth.signInWithPassword(data);

  console.log("Log in User Session", supabase.auth.getSession());
  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/formbuilder");
}
