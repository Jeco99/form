"use server";

import { createClient } from "@/utils/supabase/server";

export async function LogInwithGoogle() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  console.log(data);
  console.log(error);
}
