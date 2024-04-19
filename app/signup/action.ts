"use server";

// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

//TODO: if the user if first time
export async function signup(formData: FormData) {
  const supabase = createClient();

  const signUp_data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data, error } = await supabase.auth.signUp(signUp_data);
  console.log("data", data);
  console.log("Error", error);

  if (error) {
    redirect("/signup?message=Email rate limit exceeded");
  }

  if (data.user?.user_metadata.email_verified === false) {
    redirect("/signup?message=Email is not verified");
  }

  // revalidatePath("/", "layout");
  // redirect("/displayform");

  // revalidatePath("/", "layout");
  redirect("/displayform");
  // will not directed display form
  // data validation if the user already existed
  // no onboarding - data function
}
