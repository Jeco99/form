import { createClient } from "@/utils/supabase/client";

export async function DisplayAllForm() {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from("form_table").select(`
    form_id, 
    form_name,
    form_description, 
    field_table (
    field_id,
    field_label,
    field_type,
    field_is_required,
    field_order,
    form_id      
     )
  `);

    if (error) {
      throw new Error();
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}
