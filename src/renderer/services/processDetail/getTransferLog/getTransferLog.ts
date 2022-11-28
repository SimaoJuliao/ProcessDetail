import { handlePostCall, StandardResponse } from '../../helpers/postCall';
import { commonHeaders, ServiceHeader } from '../../helpers/headers';
import { handleGetCall } from '../../helpers/getCall';
import { TransferLogResponse } from './interfaces/transferLog';
import { configuration } from 'renderer/services/configs/configuration';

export const getTransferLog = async (
  id: string
): Promise<StandardResponse<TransferLogResponse>> => {
  const optionalHeaders = {
    bsWebService: configuration.services.webServices.frontFinWebService,
    bsWebMethod: 'v1/Log/GetTransferLog',
    BsSolution: 'APICHFin',
  };

  const headers: ServiceHeader = { ...commonHeaders(), ...optionalHeaders };

  const url = `${configuration.services.dynamicValues.url}${configuration.services.dynamicValues.endpoint}?showHistory=1&processId=${id}`;
  return await handleGetCall<TransferLogResponse>(url, headers);
};
