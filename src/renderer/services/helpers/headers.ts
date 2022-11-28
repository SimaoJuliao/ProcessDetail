import { configuration } from '../configs/configuration';

interface CommonHeaders {
  IdCompany: string;
  IdNetwork: string;
  'Content-Type': string;
  Authorization: string;
  BsSolution: string;
  BsUser: string;
  'Access-Control-Allow-Origin': string;
}

export interface ServiceHeader extends CommonHeaders {
  bsWebService: string;
  bsWebMethod: string;
}

// export const commonHeaders: CommonHeaders = {
//   IdCompany: 'AGEAS',
//   IdNetwork: 'AGEAS',
//   'Content-Type': 'application/json',
//   Authorization: '',
//   BsSolution: configuration.services.webServices.frontFinSolution,
//   BsUser: configuration.services.dynamicValues.bsUser,
//   'Access-Control-Allow-Origin': '*',
// };

export const commonHeaders = (): CommonHeaders => {
  return {
    IdCompany: 'AGEAS',
    IdNetwork: 'AGEAS',
    'Content-Type': 'application/json',
    Authorization: '',
    BsSolution: configuration.services.webServices.frontFinSolution,
    BsUser: configuration.services.dynamicValues.bsUser,
    'Access-Control-Allow-Origin': '*',
  };
};
