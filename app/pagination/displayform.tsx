"use client";

import { useEffect, useState } from "react";
import { PaginationForm } from "./action";
import TableDisplay from "@/component/table/table";
import { type User } from "@supabase/supabase-js";
import Link from "next/link";
import {
  Table,
  Text,
  Group,
  Container,
  Button,
  Title,
  TextInput,
  Flex,
} from "@mantine/core";
import PaginationDisplay from "@/component/pagination/page";
import { useRouter } from "next/navigation";

export type fetchDataType = {
  form_id: string;
  form_name: string;
  form_description: string;
  form_date: string;
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
  const [totalData, setTotalData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsperpage = 9;
  const totalPages = Math.ceil(totalData / itemsperpage);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const offset = (currentPage - 1) * itemsperpage;
      const paginatedData = await PaginationForm(offset, itemsperpage);
      setAllData(paginatedData.data);
      setTotalData(paginatedData.total_count);
    };
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    if (currentPage) {
      router.push(`/pagination?offset=${currentPage}`);
    }
  });

  // console.log(allData);
  // console.log("Total data", totalData);
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
        <Flex>
          <TextInput placeholder="Search ...." />
          <Button>Sort</Button>
        </Flex>

        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Form Name</Table.Th>
              <Table.Th>Form Description</Table.Th>
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
                  form_date={element.form_date}
                />
              );
            })}
          </Table.Tbody>
        </Table>
      </Group>

      <PaginationDisplay
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPages}
      />
    </Container>
  );
}
