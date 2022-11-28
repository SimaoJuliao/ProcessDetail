import { buildColumn } from 'renderer/components/DataTable/helpers';
import { ProcessInterface } from 'renderer/services/processDetail/getProcess/interfaces/processInterfaces';
import { DataTableInterface, HeadersTableInterface } from './interfaces';

export const buildHeadersPayment = () => {
  const columnHeaders: HeadersTableInterface[] = [
    buildColumn('Moment', 'moment'),
    buildColumn('Type', 'type'),
    buildColumn('Status', 'status'),
    buildColumn('Date', 'date'),
  ];

  return columnHeaders;
};

export const buildDataPayment = (process: ProcessInterface) => {
  const data: DataTableInterface[] = [];

  process.payments.forEach((payment) => {
    data.push({
      moment: payment.moment,
      type: payment.type,
      status: payment.status,
      date: payment.statusDate,
    });
  });

  return data;
};
