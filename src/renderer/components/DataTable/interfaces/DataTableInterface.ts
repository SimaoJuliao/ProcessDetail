import {Column} from 'react-table';
import {SortParamInterface} from '../Hooks/useSortable';
import {PaginationInterface} from '../Hooks/usePagination';
import {FilterState} from '../Hooks/useFilters';

export interface DataTablePropsInterface {
  columns: Column[];
  data: any;
  hiddenColumnsAccessor?: string[];
  sortColumnsAccessors?: string[];
  sortColumnDefault?: string;
  fetchData: (params: FetchDataParams) => void;
  totalItemCount: number;
  filters?: FilterInterface[];
  refetchData?: boolean;
  setRefetchData?: any;
  exportToExcel?: (params: FetchDataParams) => void;
}
export interface FilterInterface {
  name: string;
  label: string;
  defaultValue?: string;
  hidden?: boolean;
  getComponent: (onValueChanged: any, value: string) => JSX.Element | null;
}
export interface FetchDataParams {
  maxPageItems: number;
  filters: FilterState[];
  sortParam: SortParamInterface;
  pagination: PaginationInterface;
}
