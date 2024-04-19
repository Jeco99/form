"use client";

import { useEffect, useState } from "react";
import { DisplayAllForm } from "./action";
import TableDisplay from "@/component/table/table";
import { type User } from "@supabase/supabase-js";
import Link from "next/link";
import { Table, Text, Group, Container, Button, Title } from "@mantine/core";

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
  // console.log(allData);
  return (
    <Container fluid m={20}>
      <Group justify="flex-end">
        <Text>{user?.user_metadata.email}</Text>
        <form action="/auth/signout" method="post">
          <Button type="submit">Sign out</Button>
        </form>
      </Group>
      <Title ta={"center"} my={30}>
        Form Information
      </Title>
      <Group>
        <Link href={"/form"}>
          <Button type="button"> Add Form</Button>
        </Link>

        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Form Name</Table.Th>
              <Table.Th>Form Description</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {allData?.map((element) => {
              return (
                <TableDisplay
                  key={element.form_id}
                  form_name={element.form_name}
                  form_description={element.form_description}
                  field_table={element.field_table}
                  form_id={element.form_id}
                />
              );
            })}
          </Table.Tbody>
        </Table>
      </Group>
    </Container>
  );
}
