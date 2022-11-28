import axios from 'axios';
import { configuration } from '../configs/configuration';
import { ServiceHeader } from './headers';

export type StandardResponse<T> = {
  hasError: boolean;
  data: T;
  errorMessage: string;
  showErrorMessage: boolean;
};

export const handlePostCall: <PayloadType, ResponseType>(
  payload: PayloadType,
  headers: ServiceHeader,
  successHandler?: any,
  urlSuffix?: string
) => Promise<StandardResponse<ResponseType>> = async (
  payload,
  headers,
  successHandler = '',
  urlSuffix = ''
) => {
  //* Call axios
  return await axios({
    method: 'post',
    url: configuration.services.dynamicValues.brokerUrl + urlSuffix,
    headers: headers,
    data: payload,
  })
    .then((resp) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(
          '%c%s',
          'color: white; background: green;',
          ' Service response fetched with success !! ' + headers.bsWebMethod
        );
      }
      // console.log('resp', resp);
      if (successHandler) return successHandler(resp);

      const response: StandardResponse<ResponseType> = {
        hasError: false,
        data: resp.data,
        errorMessage: '',
        showErrorMessage: false,
      };
      return response;

      //   return resp.data as ResponseType;
    })
    .catch((error) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(
          '%c%s',
          'color: white; background: red;',
          ' Unable to get response from service: ' + headers.bsWebMethod
        );
      }
      console.log('error', error);
      const response: StandardResponse<ResponseType> = {
        hasError: true,
        data: error?.response?.data || 'Ocorreu um erro inesperado!',
        errorMessage:
          error?.response?.data?.detail ||
          error?.response?.data?.title ||
          'Ocorreu um erro inesperado!',
        showErrorMessage: true,
      };
      if (error?.response?.data?.status === 404) {
        response.showErrorMessage = false;
      }

      return response;
      //   return error;
    });
};
