import { buildColumn } from 'renderer/components/DataTable/helpers';
import { ProcessInterface } from 'renderer/services/processDetail/getProcess/interfaces/processInterfaces';
import { DataTableInterface, HeadersTableInterface } from './interfaces';

export const buildHeadersDocument = () => {
  const columnHeaders: HeadersTableInterface[] = [
    buildColumn('Doc', 'doc'),
    buildColumn('Optical Key', 'opticalKey'),
    buildColumn('Digitalization State', 'digitalization'),
    buildColumn('Digitalization State Date', 'digitalizationDate'),
    buildColumn('Vat Number', 'vatNumber'),
  ];

  return columnHeaders;
};

export const buildDataDocument = (process: ProcessInterface) => {
  const data: DataTableInterface[] = [];

  process.documentation.documentKeys.forEach((documentKey) => {
    data.push({
      doc: documentKey.docDescription,
      opticalKey: documentKey.digitalization.opticalKey,
      digitalization: documentKey.digitalization.status,
      digitalizationDate: documentKey.digitalization.creationDate,
      vatNumber: documentKey.fiscalNumber,
    });
  });

  return data;
};
