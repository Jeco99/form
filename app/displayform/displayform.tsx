"use client";

import { useEffect, useState } from "react";
import { DisplayAllForm } from "./action";
import FormCard from "../../component/formcard/page";
import { type User } from "@supabase/supabase-js";
import Link from "next/link";

export type fetchDataType = {
  form_id: string;
  form_name: string;
  form_description: string;
  field_table: {
    field_id: string;
    field_label: string;
    field_type: string;
    field_is_required: boolean;
    field_order: string;
    form_id: string;
  }[];
};

export default function DisplayForm({ user }: { user: User | null }) {
  const [allData, setAllData] = useState<fetchDataType[] | undefined>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await DisplayAllForm();
      setAllData(data);
    };
    fetchData();
  }, []);
  console.log(allData);
  return (
    <>
      <h1>Welcome, {user?.email}</h1>
      <Link href={"/form"}>
        <button type="button"> Add Form</button>
      </Link>

      <form action="/auth/signout" method="post">
        <button className="button block" type="submit">
          Sign out
        </button>
      </form>

      {allData?.map((element) => {
        return (
          <div key={element.form_id}>
            <ul>
              <FormCard
                form_name={element.form_name}
                form_description={element.form_description}
                field_table={element.field_table}
                form_id={element.form_id}
              />
            </ul>
          </div>
        );
      })}
    </>
  );
}
