import React, { useCallback, useEffect, useState } from 'react';
import { DataTablePropsInterface } from './interfaces/DataTableInterface';
import { BootstrapLayout } from './Components/Bootstrap/BootstrapLayout';
import { useTable } from 'react-table';
import { useSortable } from './Hooks/useSortable';
import { usePagination } from './Hooks/usePagination';
import { useFilters } from './Hooks/useFilters';
import { Button } from 'reactstrap';

export const DataTable = ({
  columns,
  data,
  hiddenColumnsAccessor,
  sortColumnsAccessors,
  fetchData,
  totalItemCount,
  filters = [],
  sortColumnDefault,
  refetchData,
  setRefetchData,
  exportToExcel,
}: DataTablePropsInterface) => {
  const dataTableInstance = useTable({
    columns,
    data,
  });
  const [fetchDataNextRender, setFetchDataNextRender] = useState(false);

  const [maxPageItems, setMaxPageItems] = useState(10);

  const { sortParam, changeSortParam } = useSortable(sortColumnDefault);
  const pagination = usePagination(
    totalItemCount,
    maxPageItems,
    fetchDataNextRender
  );
  const filtersState = useFilters(filters);

  useEffect(() => {
    //forceUpdate()
    if (refetchData) {
      setFetchDataNextRender(true);
      setRefetchData(false);
    }
  }, [refetchData]);

  useEffect(() => {
    if (hiddenColumnsAccessor?.length) {
      dataTableInstance.setHiddenColumns(hiddenColumnsAccessor);
    }

    fetchServiceData();
  }, []);

  useEffect(() => {
    const asyncCall = async () => {
      fetchData &&
        (await fetchData({
          pagination,
          sortParam,
          filters: filtersState.state,
          maxPageItems,
        }));
      setFetchDataNextRender(false);
    };
    if (fetchDataNextRender) {
      asyncCall();
    }
  }, [fetchDataNextRender]);

  const fetchServiceData = (resetPagination = true) => {
    resetPagination && pagination.resetPagination();
    setFetchDataNextRender(true);
  };

  const downloadFileService = async () => {
    if (exportToExcel)
      await exportToExcel({
        pagination,
        sortParam,
        filters: filtersState.state,
        maxPageItems,
      });
  };

  return (
    <>
      <BootstrapLayout
        dataTableInstance={dataTableInstance}
        sortColumnsAccessors={sortColumnsAccessors}
        sortParam={sortParam}
        maxPageItems={maxPageItems}
        filters={filtersState}
        pagination={pagination}
        controls={{
          changeMaxPageItems: (value: number) => setMaxPageItems(value),
          changeSortParam: (id: string) => {
            changeSortParam(id);
            fetchServiceData(false);
          },
          fetchServiceData,
        }}
      />
      {exportToExcel && dataTableInstance.data.length !== 0 ? (
        <Button onClick={() => downloadFileService()}>
          Exportar para Excel
        </Button>
      ) : null}
    </>
  );
};
