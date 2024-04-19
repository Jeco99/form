"use client";

// import { DisplayIndividualForm } from "@/app/card/[id]/action";
import { fetchDataType } from "@/app/displayform/displayform";
import { Table, Button, Group } from "@mantine/core";
import Link from "next/link";

export default function TableDisplay({
  form_id,
  form_name,
  form_description,
}: //   field_table,
fetchDataType) {
  //   const rows = field_table.map((element) => (
  //     <>
  //       <Table.Td>{element.field_label}</Table.Td>
  //       <Table.Td>{element.field_type}</Table.Td>
  //       <Table.Td>{element.field_is_required.toString()}</Table.Td>
  //     </>
  //   ));

  return (
    <Table.Tr>
      <Table.Td>{form_name}</Table.Td>
      <Table.Td>{form_description}</Table.Td>
      {/* {rows} */}
      <Table.Td>
        <Group>
          <Link href={`/card/${form_id}`}>
            <Button type="button">View</Button>
          </Link>

          {/* <Button>Delete</Button> */}
        </Group>
      </Table.Td>
    </Table.Tr>
  );
}
