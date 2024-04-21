import { createClient } from "@/utils/supabase/client";

export async function PaginationForm() {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.rpc("form_table", {
      offsetnumber: 0,
      limitnumber: 9,
    });

    if (error) {
      throw new Error();
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}
