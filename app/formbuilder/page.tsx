import { createClient } from "@/utils/supabase/server";
import FormBuilder from "./formbuilder";

export default async function Form() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  // console.log("get_user", user);

  return <FormBuilder user={user} />;
}
