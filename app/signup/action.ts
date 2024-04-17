"use server";

// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

//Create a function that allows the user to sign up
export async function signup(formData: FormData) {
  const supabase = createClient();

  const signUp_data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data, error } = await supabase.auth.signUp(signUp_data);
  // console.log("Sign Up", signUp_data);
  // console.log("Sign Up data", data.user);
  // console.log("Error", error);
  // console.log("Sign Up getSession", supabase.auth.getSession());
  if (error) {
    redirect("/error");
  }

  //   revalidatePath("/", "layout");
  redirect("/formbuilder");
}

// export type userTypeDetails = {
//   id: string;
//   email: string;
//   confirmation_sent_at: string;
//   created_at: string;
//   updated: string;
// };

//Create a function that stores the details of the user from the onboarding step
// export async function store_user_details(data) {
//   const [userDetais, setUserDetails] = useState<userTypeDetails[]>([]);
//   setUserDetails(data);
// }
