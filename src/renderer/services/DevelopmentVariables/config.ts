import { KnownServicesPrefix } from './configTypes';

let url,
  endpoint,
  bsUserTemp,
  bsUserEntityTemp,
  bsUserPortalWaspTemp,
  environment,
  cookieTimerMinutesTemp;
//TS
if (process.env.NODE_ENV === 'development') {
  url = 'https://bs-ts.ageas.pt'; //url = 'http://bs-dv.servicenp.ageas.intra';
  endpoint = '/N1/TH.ashx';
  bsUserTemp = 'SVTSAgentsPortalFin';
  bsUserEntityTemp = 'SVTSAgentsPortalFin';
  bsUserPortalWaspTemp = '\\BS\\AgentsPortalD';
  environment = 'dv';
  cookieTimerMinutesTemp = '240';
}

if (process.env.NODE_ENV === 'production') {
  environment = '#{Environment}#';
}

//PP;
if (process.env.NODE_ENV === 'development') {
  url = 'https://bs2c-pp.ageas.pt';
  endpoint = '/N1/SH1.ashx';
  bsUserTemp = 'SVPPAgentsPortalFin';
  bsUserEntityTemp = 'SVPPAgentsPortalFin';
  bsUserPortalWaspTemp = '\\BS\\AgentsPortalQ';
  environment = 'dv';
  cookieTimerMinutesTemp = '240';
}

if (process.env.NODE_ENV === 'production') {
  url = '#{BrokerServerUrl}#';
  endpoint = '#{BrokerServerEndpoint}#';
  bsUserTemp = '#{BsUser}#';
  bsUserPortalWaspTemp = '#{BsUserPortal}#';
  bsUserEntityTemp = '#{BsLifeUser}#';
  environment = '#{Environment}#';
  cookieTimerMinutesTemp = '#{SessionCookieExpirationMinutes}#';
}

export const KnownUrls = {
  Broker: url,
};

export const Enviroment = environment;
export const bsUser = bsUserTemp;
export const bsUserPortalWasp = bsUserPortalWaspTemp;
export const bsUserEntity = bsUserEntityTemp;
export const cookieTimerMinutes = cookieTimerMinutesTemp || 240;

export const KnownServices: KnownServicesPrefix = {
  N1TH: endpoint,
  UpdateEntity: 'v1/Entities',
  Entity: 'v1/Entities',
};
