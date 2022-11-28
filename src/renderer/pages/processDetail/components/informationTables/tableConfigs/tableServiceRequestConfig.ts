import { buildColumn } from 'renderer/components/DataTable/helpers';
import { ProcessInterface } from 'renderer/services/processDetail/getProcess/interfaces/processInterfaces';
import { DataTableInterface, HeadersTableInterface } from './interfaces';

export const buildHeadersServiceRequest = () => {
  const columnHeaders: HeadersTableInterface[] = [
    buildColumn('Id', 'id'),
    buildColumn('Number', 'number'),
    buildColumn('Reference', 'reference'),
    buildColumn('Creation Date', 'creationDate'),
  ];

  return columnHeaders;
};

export const buildDataServiceRequest = (process: ProcessInterface) => {
  const data: DataTableInterface[] = [];

  process.serviceRequests &&
    process.serviceRequests.forEach((service) => {
      data.push({
        id: service.id,
        number: service.number,
        reference: service.reference,
        creationDate: '',
      });
    });

  return data;
};
