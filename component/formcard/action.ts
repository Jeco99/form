import { createClient } from "@/utils/supabase/client";

export async function DeleteButton(form_id: string) {
  try {
    const supabase = createClient;
    const { error } = await supabase
      .from("form_table")
      .delete()
      .eq("form_id", form_id);
    console.log(error);
  } catch (error) {
    console.log(error);
  }
}
