import { buildColumn } from 'renderer/components/DataTable/helpers';
import { TransferLogInterface } from 'renderer/store/transferLog/interfaces/transferLogInterface';
import { DataTableInterface, HeadersTableInterface } from './interfaces';

export const buildHeadersPolicyCreation = () => {
  const columnHeaders: HeadersTableInterface[] = [
    buildColumn('Date', 'date'),
    buildColumn('State', 'state'),
    buildColumn('Details', 'details'),
  ];

  return columnHeaders;
};

export const buildDataPolicyCreation = (
  transferLogs: TransferLogInterface[]
) => {
  const data: DataTableInterface[] = [];

  transferLogs.forEach((log) => {
    data.push({
      date: log.date,
      state: log.state,
      details: log.details,
    });
  });

  return data;
};
