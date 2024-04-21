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

export async function PaginationForm(offset: number, limit: number) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.rpc("paginationform", {
      offsetnumber: offset,
      limitnumber: limit,
    });
    // console.log(data);
    if (error) {
      throw new Error();
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}
