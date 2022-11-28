import React from 'react';
import { TableInstance } from 'react-table';
import { Table } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import { StyledHeader, StyledLabel, StyledWrapper } from './styles';
import { Pagination } from './Pagination';
import { PaginationInterface } from '../../Hooks/usePagination';
import { UseFiltersInterface } from '../../Hooks/useFilters';
import DropDown from 'renderer/components/DropDown';
import { PageSizeDropdown } from './configs';

type Props = {
  dataTableInstance: TableInstance;
  sortParam: {
    sortByAccessorId: string;
    isSortedDesc: boolean;
  };
  sortColumnsAccessors?: string[];
  maxPageItems: number;
  filters: UseFiltersInterface;
  pagination: PaginationInterface;
  controls: {
    changeMaxPageItems: (val: number) => void;
    changeSortParam: (id: string) => void;
    fetchServiceData: (resetPagination?: boolean) => void;
  };
};

export const BootstrapLayout: React.FC<Props> = ({
  dataTableInstance,
  sortParam,
  sortColumnsAccessors,
  maxPageItems,
  filters,
  pagination,
  controls: { changeSortParam, changeMaxPageItems, fetchServiceData },
}) => {
  const { getTableProps, headerGroups, rows, prepareRow } = dataTableInstance;
  return (
    <>
      <Row>
        <Col sm={12} className="d-flex justify-content-end">
          <StyledWrapper>
            <StyledLabel>Itens por Página</StyledLabel>
            <DropDown
              // label=""
              options={PageSizeDropdown}
              onValueChanged={(id, value) => {
                if (!value || isNaN(parseFloat(value))) return;
                changeMaxPageItems(+value);
                fetchServiceData();
              }}
              value={`${maxPageItems}`}
            />
          </StyledWrapper>
        </Col>
        {filters.components.map((filterComponent) => {
          if (filterComponent.hidden) {
            return null;
          }
          return (
            <Col sm={6}>
              <StyledWrapper>
                <StyledLabel>{filterComponent.label.toUpperCase()}</StyledLabel>
                {filterComponent.getComponent((newValue: any) => {
                  filters.changeFilterState(filterComponent.name, newValue);
                  fetchServiceData();
                }, filters.state.find((s) => s.name === filterComponent.name)?.value || '')}
              </StyledWrapper>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover size="sm" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column: any) => (
                    <th {...column.getHeaderProps()}>
                      <StyledHeader>
                        {column.render('Header')}

                        {sortColumnsAccessors?.includes(column.id) ? (
                          column.id === sortParam.sortByAccessorId ? (
                            sortParam.isSortedDesc ? (
                              <ChevronDown
                                className={'active-icon'}
                                onClick={() => changeSortParam(column.id)}
                              />
                            ) : (
                              <ChevronUp
                                className={'active-icon'}
                                onClick={() => changeSortParam(column.id)}
                              />
                            )
                          ) : (
                            <ChevronDown
                              onClick={() => changeSortParam(column.id)}
                            />
                          )
                        ) : null}
                      </StyledHeader>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr className="text-center" {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      {pagination.pageCount > 1 && (
        <Row>
          <Col sm className="d-flex justify-content-center">
            <Pagination
              pagination={pagination}
              fetchServiceData={() => {
                fetchServiceData(false);
              }}
            />
          </Col>
        </Row>
      )}
    </>
  );
};
