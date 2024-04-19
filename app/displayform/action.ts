import { createClient } from "@/utils/supabase/client";

export async function DisplayAllForm() {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from("form_table").select("*");

    if (error) {
      throw new Error();
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}
