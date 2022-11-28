import { useEffect, useState } from 'react';

export interface PaginationInterface {
  currentPage: number;
  pageCount: number;
  changeCurrentPageSelected: (value: number) => void;
  resetPagination: () => number;
}
export const usePagination = (
  totalItems: number,
  length: number,
  fetchDataNextRender: boolean,
): PaginationInterface => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(totalItems !== undefined ? Math.ceil(totalItems / length) : 0);
  }, [totalItems, length, fetchDataNextRender]);
  return {
    currentPage,
    pageCount,
    changeCurrentPageSelected: (value: number) => {
      setPageCount(length ? Math.ceil(totalItems / length) : 0);
      setCurrentPage(value);
    },
    resetPagination: () => {
      setCurrentPage(0);
      setPageCount(0);
      return 0;
    },
  };
};
