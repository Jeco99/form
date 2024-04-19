import DisplayForm from "./displayform";
import { createClient } from "@/utils/supabase/server";

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  // console.log(user);

  return <DisplayForm user={user} />;
}
