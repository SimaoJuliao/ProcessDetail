export interface Order {
  sortField: string;
  sortOrder: 'Ascending' | 'Descending' | 'Unspecified';
}

export interface Paging {
  pageSize: number;
  pageNumber: number;
  totalItemCount: number;
  maxItems: number;
}
