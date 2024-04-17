"use server";
import { createClient } from "@/utils/supabase/server";

export async function loginWithGoogle() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location}/auth/callback/v1`,
    },
  });
  console.log(data);
  console.log(error);
}
