import React from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationInterface } from '../../Hooks/usePagination';
type Props = {
  pagination: PaginationInterface;
  fetchServiceData: () => void;
};

export const Pagination: React.FC<Props> = ({
  fetchServiceData,
  pagination: { currentPage, changeCurrentPageSelected, pageCount },
}) => {
  return (
    <>
      <ReactPaginate
        pageCount={pageCount}
        forcePage={currentPage}
        onPageChange={(data: any) => {
          changeCurrentPageSelected(data.selected);
          fetchServiceData();
        }}
        previousLabel={'Anterior'}
        nextLabel={'Próxima'}
        breakLabel={'...'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName={'pagination pagination-sm'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
        breakClassName={'page-link'}
        breakLinkClassName={'active'}
      />
    </>
  );
};
