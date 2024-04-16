import { createClient } from "@/utils/supabase/server";

export default async function Notes() {
  const supabase = createClient();
  const { data: field } = await supabase.from("field").select();

  return <pre>{JSON.stringify(field, null, 2)}</pre>;
}
