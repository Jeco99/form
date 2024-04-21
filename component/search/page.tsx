import React, { ChangeEvent, useState } from "react";
import { TextInput } from "@mantine/core";

type SearchDataProp = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchDataProp> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setSearch(searchQuery);
    onSearch(searchQuery);
  };
  return (
    <>
      <TextInput
        variant="filled"
        size="lg"
        radius="md"
        placeholder="Search for form name and form description"
        value={search}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBar;
