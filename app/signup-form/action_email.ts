"use server";

// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { UserData } from "./page";

export async function signup_with_email(dataForm: UserData) {
  const supabase = createClient();
  const signup = {
    email: dataForm.user_email as string,
    password: dataForm.user_password as string,
  };

  const { data, error } = await supabase.auth.signUp(signup);
  console.log("sign up with email", data);
  console.log("Error", error);

  if (error) {
    redirect("/signup-form?message=Email rate limit exceeded");
  }

  if (data.user?.user_metadata.email_verified === false) {
    redirect("/signup-form?message=Email is not verified");
  }
}
