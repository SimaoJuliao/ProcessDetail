import { useCallback, useState } from 'react';

export type SortParamInterface = { sortByAccessorId: string; isSortedDesc: boolean };
export const useSortable = (defaultParam = '') => {
  const [sortParam, setSortParam] = useState<SortParamInterface>({
    sortByAccessorId: defaultParam,
    isSortedDesc: false,
  });
  const changeSortParam = useCallback(
    (accessorId: string) => {
      if (accessorId === sortParam.sortByAccessorId) {
        setSortParam({ ...sortParam, isSortedDesc: !sortParam.isSortedDesc });
      } else {
        setSortParam({ sortByAccessorId: accessorId, isSortedDesc: false });
      }
    },
    [sortParam],
  );

  return { sortParam, changeSortParam };
};
