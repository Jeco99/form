"use server";

import { createClient } from "@/utils/supabase/server";

export default async function Notes() {
  const supabase = createClient();
  const { data: form } = await supabase.from("form").select("formid").single();

  return <pre>{JSON.stringify(form, null, 2)}</pre>;
}
