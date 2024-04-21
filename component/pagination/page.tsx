import React from "react";
import { Pagination } from "@mantine/core";

type PaginationDisplayProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPage: number;
};

const PaginationDisplay: React.FC<PaginationDisplayProps> = ({
  currentPage,
  setCurrentPage,
  totalPage,
}) => {
  return (
    <Pagination
      value={currentPage}
      onChange={setCurrentPage}
      total={totalPage}
    />
  );
};

export default PaginationDisplay;
