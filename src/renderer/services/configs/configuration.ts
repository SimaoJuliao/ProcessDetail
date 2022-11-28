interface ConfigurationInterface {
  services: {
    dynamicValues: {
      bsUser: string;
      endpoint: string;
      url: string;
      brokerUrl: string;
      environment: string;
    };
    webServices: {
      frontFinWebService: string;
      frontFinSolution: string;
    };
  };
}

const generalConfiguration: ConfigurationInterface = {
  services: {
    dynamicValues: {
      bsUser: '\\BS\\HighAvailabilityD',
      endpoint: '/N1/TH.ashx',
      url: 'https://bs-ts.ageas.pt',
      environment: 'dv',
      brokerUrl: 'https://bs-ts.ageas.pt/N1/TH.ashx',
    },
    webServices: {
      frontFinWebService: 'ageas-api-waspfin20',
      frontFinSolution: 'APICHFin',
    },
  },
};

function Configuration() {
  const environment = 'TS';
  const configuration = generalConfiguration;

  const updateConfiguration = (environment: string) => {
    //! Configuration for dev develpment
    if (environment === 'TS') {
      // TS
      configuration.services.dynamicValues = {
        ...configuration.services.dynamicValues,
        bsUser: '\\BS\\HighAvailabilityD',
        endpoint: '/N1/TH.ashx',
        url: 'https://bs-ts.ageas.pt',
        environment: 'dv',
      };
    } else {
      // PP
      configuration.services.dynamicValues = {
        ...configuration.services.dynamicValues,
        bsUser: 'SVPPAgentsPortalFin',
        endpoint: '/N1/TH.ashx',
        url: 'https://bs-pp.ageas.pt',
        environment: 'dv',
      };
    }
    configuration.services.dynamicValues.brokerUrl =
      configuration.services.dynamicValues.url! +
      configuration.services.dynamicValues.endpoint;

    console.log('conf: ', configuration);
  };

  return {
    environment,
    services: configuration.services,
    updateConfiguration,
  };
}

export const configuration = Configuration();
