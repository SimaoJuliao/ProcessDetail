import { ProcessInterface } from '../../../../services/API/Internal/processDetail/getProcess/interfaces/processInterfaces';

export const buildCampaign = (process: ProcessInterface) => {
  return {
    headers: [
      { key: 'campaign', name: 'Campaign' },
      { key: 'subscriptionFee', name: 'Subscription Fee' },
      { key: 'subscriptionRegularFee', name: 'Subscription Regular Fee' },
      { key: 'agentFee', name: 'Agent Fee' },
      { key: 'agentRegularFee', name: 'Agent Regular Fee' },
    ],
    columns: [
      process.investment.discount.campaignDescription,
      process.investment.discount.subscriptionChargesPercentage,
      process.investment.discount.subscriptionChargesPeriodicPercentage,
      process.investment.discount.agentChargesPercentage,
      process.investment.discount.agentChargesPeriodicPercentage,
    ],
  };
};
