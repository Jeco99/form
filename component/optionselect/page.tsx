import { useFieldArray } from "react-hook-form";
import { Flex, TextInput, Button, Box } from "@mantine/core";

export default function Options({ data, field_index, register, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `field.${field_index}.field_options`,
  });

  return (
    <>
      {fields.map((field, index) => (
        <Flex
          key={field.id}
          gap="md"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
          mt={9}
        >
          <TextInput
            type="text"
            placeholder={`Options ${index + 1}`}
            {...register(`field.${field_index}.field_options.${index}.options`)}
          />
          <Button type="button" onClick={() => remove(index)}>
            Remove
          </Button>
        </Flex>
      ))}
      <Box mt={8}>
        <Button type="button" onClick={() => append({ options: "" })}>
          Add Option
        </Button>
      </Box>
    </>
  );
}
