import { StandardResponse } from '../../helpers/postCall';
import { commonHeaders, ServiceHeader } from '../../helpers/headers';
import { handleGetCall } from '../../helpers/getCall';
import { LogResponse } from './interfaces/log';
import { configuration } from 'renderer/services/configs/configuration';

export const getLog = async (
  id: string
): Promise<StandardResponse<LogResponse>> => {
  const optionalHeaders = {
    bsWebService: configuration.services.webServices.frontFinWebService,
    bsWebMethod: 'v1/Log/GetLog',
    BsSolution: 'APICHFin',
  };

  const headers: ServiceHeader = { ...commonHeaders(), ...optionalHeaders };

  const url = `${configuration.services.dynamicValues.url}${configuration.services.dynamicValues.endpoint}?processId=${id}&rows=1000`;
  return await handleGetCall<LogResponse>(url, headers);
};
