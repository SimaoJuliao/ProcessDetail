import axios from 'axios';
import { ServiceHeader } from './headers';
import { StandardResponse } from './postCall';

export const handleGetCall: <ResponseType>(url: string, headers: ServiceHeader, suffixUrl?: string) => Promise<any> =
  async (url, headers, suffixUrl = '') => {
    //* Call axios
    return await axios({
      method: 'get',
      url: url + suffixUrl,
      headers: headers,
    })
      .then((resp) => {
        if (process.env.NODE_ENV === 'development') {
          console.log(
            '%c%s',
            'color: white; background: green;',
            ' Service response fetched with success !! ' + headers.bsWebMethod,
          );
        }
        const response: StandardResponse<ResponseType> = {
          hasError: false,
          data: resp.data,
          errorMessage: '',
          showErrorMessage: false,
        };
        return response;

        //  return resp.data as ResponseType;
      })
      .catch((error) => {
        if (process.env.NODE_ENV === 'development') {
          console.log(
            '%c%s',
            'color: white; background: red;',
            ' Unable to get response from service !! ' + headers.bsWebMethod,
          );
        }
        const response: StandardResponse<ResponseType> = {
          hasError: true,
          data: error?.response?.data || 'Ocorreu um erro inesperado!',
          errorMessage: error?.response?.data?.detail || error?.response?.data?.title || 'Ocorreu um erro inesperado!',
          showErrorMessage: true,
        };
        if (error?.response?.data?.status === 404) {
          response.showErrorMessage = false;
        }

        return response;
        //  return error;
      });
  };

//? handleGetCall
//?
//? Receive ResponseType
//?
//? Call axios with the parameters passed
//? url: Broker url plus known service plus an payload
//? headers: The result of common headers plus specific headers
//?
//? return response.data as ResponseType passed
//?
