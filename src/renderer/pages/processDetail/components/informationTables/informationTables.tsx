import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  TabPane,
} from 'reactstrap';
import { DataTable } from 'renderer/components/DataTable/DataTable';
import { FetchDataParams } from 'renderer/components/DataTable/interfaces/DataTableInterface';
import useLoader from 'renderer/hooks/loader';
import { getLog } from 'renderer/services/processDetail/getLog/getLog';
import { getTransferLog } from 'renderer/services/processDetail/getTransferLog/getTransferLog';
import { updateLogs } from 'renderer/store/log/actions/actions';
import { LogInterface } from 'renderer/store/log/interfaces/logInterface';
import { ProcessInterface } from 'renderer/store/process/interfaces/processInterface';
import { StoreInterface } from 'renderer/store/storeInterface';
import { updateTransferLog } from 'renderer/store/transferLog/actions/actions';
import { TransferLogInterface } from 'renderer/store/transferLog/interfaces/transferLogInterface';
import { accordionHeaders } from './helpers';
import {
  DataTableInterface,
  HeadersTableInterface,
} from './tableConfigs/interfaces';
import {
  buildDataDocument,
  buildHeadersDocument,
} from './tableConfigs/tableDocumentConfig';
import {
  buildDataLogs,
  buildHeadersLogs,
} from './tableConfigs/tableLogsConfig';
import {
  buildDataPayment,
  buildHeadersPayment,
} from './tableConfigs/tablePaymentConfig';
import {
  buildDataPeople,
  buildHeadersPeople,
} from './tableConfigs/tablePeopleConfig';
import {
  buildDataPolicyCreation,
  buildHeadersPolicyCreation,
} from './tableConfigs/tablePolicyCreationConfig';
import {
  buildDataServiceRequest,
  buildHeadersServiceRequest,
} from './tableConfigs/tableServiceRequestConfig';

export interface InformationTablesPropsInterface {
  currentTab: string;
}

export const InformationTables: React.FC<InformationTablesPropsInterface> = ({
  currentTab,
}) => {
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [columns, setColumns] = useState<HeadersTableInterface[]>([]);
  const [data, setData] = useState<DataTableInterface[]>([]);
  const [refetchData, setRefetchData] = useState<boolean>(false);

  const process: ProcessInterface = useSelector(
    (storeState: StoreInterface) => storeState.process
  );
  const transferLogs: TransferLogInterface[] = useSelector(
    (storeState: StoreInterface) => storeState.transferLogs
  );
  const logs: LogInterface[] = useSelector(
    (storeState: StoreInterface) => storeState.logs
  );

  const fetchData = (params: FetchDataParams) => {
    let dataTable: DataTableInterface[] = [];
    let columnHeaders: any = [];

    if (process) {
      if (currentTab === accordionHeaders[0].key) {
        columnHeaders = buildHeadersPeople();
        dataTable = buildDataPeople(process);
      } else if (currentTab === accordionHeaders[1].key) {
        columnHeaders = buildHeadersDocument();
        dataTable = buildDataDocument(process);
      } else if (currentTab === accordionHeaders[2].key) {
        columnHeaders = buildHeadersPayment();
        dataTable = buildDataPayment(process);
      } else if (currentTab === accordionHeaders[3].key) {
        columnHeaders = buildHeadersServiceRequest();
        dataTable = buildDataServiceRequest(process);
      } else if (currentTab === accordionHeaders[4].key) {
        columnHeaders = buildHeadersPolicyCreation();
        if (transferLogs) {
          dataTable = buildDataPolicyCreation(transferLogs);
        }
      } else {
        columnHeaders = buildHeadersLogs();
        if (logs) {
          dataTable = buildDataLogs(logs);
        }
      }
      setColumns(columnHeaders);
      updateData(params, dataTable);
    } else {
      setData([]);
      return;
    }
  };

  const updateData = async (
    params: FetchDataParams,
    data: DataTableInterface[]
  ) => {
    const newData: DataTableInterface[] = [];
    for (
      let i = params.pagination.currentPage * params.maxPageItems;
      i < (params.pagination.currentPage + 1) * params.maxPageItems;
      i++
    ) {
      if (data[i] === undefined) break;
      newData.push(data[i]);
    }
    setData(newData);
    setTotalItemCount(data.length);
  };

  useEffect(() => {
    setRefetchData(true);
  }, [currentTab]);

  return (
    <>
      {accordionHeaders.map((header, index) => (
        <TabPane tabId={(index + 2).toString()}>
          {process && currentTab === '3' && (
            <Col sm="3" className="mb-4">
              <ListGroup>
                <ListGroupItem className="d-flex px-2">
                  <span className="font-weight-bold text-muted ">
                    Signature
                  </span>
                  <span className="ml-auto text-right text-warning">
                    {process?.signatureType}
                  </span>
                </ListGroupItem>
              </ListGroup>
            </Col>
          )}
          {process ? (
            <Row>
              <Col>
                <DataTable
                  totalItemCount={totalItemCount}
                  columns={columns}
                  data={data}
                  fetchData={fetchData}
                  refetchData={refetchData}
                  setRefetchData={setRefetchData}
                />
              </Col>
            </Row>
          ) : (
            <span className="text-primary text-center">No Data</span>
          )}
        </TabPane>
      ))}
    </>
  );
};
