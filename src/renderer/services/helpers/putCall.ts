import axios from 'axios';
import { ServiceHeader } from './headers';

export const handlePutCall: <PayloadType, ResponseType>(
  payload: PayloadType,
  headers: ServiceHeader,
  composedUrl: string,
) => Promise<ResponseType> = async (payload, headers, composedUrl) => {
  //* Call axios
  return await axios({
    method: 'PUT',
    url: composedUrl,
    headers: headers,
    data: payload,
  })
    .then((resp) => {
      //! Remove Console Log Before Production
      if (process.env.NODE_ENV === 'development') {
        console.log('%c%s', 'color: white; background: green;', ' Service response fetched with success !! ');
      }

      return resp.data as ResponseType;
    })
    .catch((error) => {
      //! Remove Console Log Before Production
      if (process.env.NODE_ENV === 'development') {
        console.log('%c%s', 'color: white; background: red;', ' Unable to get response from service !! ');
      }

      return error;
    });
};

//? handlePostCall
//?
//? Receive PayLoadType
//? Receive ResponseType
//?
//? Call axios with the parameters passed
//? url: Broker url plus known service
//? payload: The values need to be passed on the post call
//? headers: The result of common headers plus specific headers
//?
//? return response.data as ResponseType passed
//?
