import { handlePostCall, StandardResponse } from '../../helpers/postCall';
import { commonHeaders, ServiceHeader } from '../../helpers/headers';
import {
  ProcessPayload,
  ProcessResponse,
} from './interfaces/processInterfaces';
import { configuration } from 'renderer/services/configs/configuration';

export const getProcess = async (
  payload: ProcessPayload
): Promise<StandardResponse<ProcessResponse>> => {
  const optionalHeaders = {
    bsWebService: configuration.services.webServices.frontFinWebService,
    bsWebMethod: 'v1/Process',
  };

  const headers: ServiceHeader = { ...commonHeaders(), ...optionalHeaders };

  return await handlePostCall<ProcessPayload, ProcessResponse>(
    payload,
    headers
  );
};
