import React from 'react';

export const buildColumn = (header: string, id: string, show = true, cell?: any) => {
  const obj: any = {
    Header: header,
    accessor: id,
    show,
  };
  if (cell) {
    obj.Cell = cell;
  }
  return obj;
};
