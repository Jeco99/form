"use client";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@mantine/core";

export default function LogInWithGoogle() {
  const googleOauth = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return <Button onClick={googleOauth}>Login with google</Button>;
}
