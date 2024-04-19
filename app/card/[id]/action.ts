// import { createClient } from "@/utils/supabase/client";

// export async function DisplayIndividualForm(id: string | undefined) {
//   try {
//     console.log(id);
//     const supabase = createClient();
//     const { data, error } = await supabase
//       .from("form_table")
//       .select(
//         `
//         form_id,
//         form_name,
//         form_description,
//         field_table (
//         field_id,
//         field_label,
//         field_type,
//         field_is_required,
//         field_order,
//         form_id
//         )
//         `
//       )
//       .eq("form_id", id);

//     if (error) {
//       throw new Error();
//     }
//     console.log(data);
//     // return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
