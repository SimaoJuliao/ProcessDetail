import { buildColumn } from 'renderer/components/DataTable/helpers';
import { LogInterface } from 'renderer/store/log/interfaces/logInterface';
import { DataTableInterface, HeadersTableInterface } from './interfaces';

export const buildHeadersLogs = () => {
  const columnHeaders: HeadersTableInterface[] = [
    buildColumn('Date', 'date'),
    buildColumn('State', 'state'),
    buildColumn('Component', 'component'),
    buildColumn('Type', 'type'),
    buildColumn('Context', 'context'),
    buildColumn('Method', 'method'),
    buildColumn('Message', 'message'),
  ];

  return columnHeaders;
};

export const buildDataLogs = (logs: LogInterface[]) => {
  const data: DataTableInterface[] = [];

  logs.forEach((log) => {
    data.push({
      date: log.dataHora,
      state: log.state,
      component: log.component,
      type: log.type,
      context: log.context,
      method: log.method,
      message: log.message,
    });
  });

  return data;
};
