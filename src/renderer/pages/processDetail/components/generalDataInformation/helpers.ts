import { ProcessInterface } from 'renderer/store/process/interfaces/processInterface';

export interface InformationMessageInterface {
  proposal: string;
  policy: string;
  policyToReinforce: string;
  canceled: string;
}

export const buildInformationMessage = (
  process: ProcessInterface
): InformationMessageInterface => {
  return {
    proposal:
      process?.productCode === 'WIUNLN21ULA' ||
      process?.productCode === 'WIUNPN20ULP'
        ? 'Serviço Utilizado: createPropositionAIA'
        : process?.productCode === 'WIUNLN21FEM'
        ? 'Serviço Utilizado: createPropositionSavingsCul'
        : 'Serviço Utilizado: ContractNumberingAIA',
    policy:
      process?.productCode === 'WICAPH06MPA' ||
      process?.productCode === 'WIPPRH16PMS'
        ? 'Serviço Utilizado: CreateContractAIA'
        : 'Serviço Utilizado: transferPropositionAIA',
    policyToReinforce: 'Serviço Utilizado: unsolicitedPremiumCreate',
    canceled:
      'Serviços Utilizados: proposalCancelAIA, UpdProposalAia, createServiceRequestWASP',
  };
};

export const buildGeneralData = (process: ProcessInterface) => {
  // payment Confirmation
  let maxStatusDate = '';
  process.payments.forEach((payment) => {
    if (payment.moment === 'Unique' && payment.status === 'Confirmed') {
      if (maxStatusDate) {
        const date1 = new Date(maxStatusDate);
        const date2 = new Date(payment.statusDate);
        maxStatusDate = date1 < date2 ? date2.toString() : date1.toString();
      } else maxStatusDate = payment.statusDate;
    }
  });

  // last Document Approved
  let maxCreationDate = '';
  process.documentation.documentKeys.forEach((document) => {
    if (
      document.digitalization.status === 'Arquivado com Sucesso (Digital)' ||
      document.digitalization.status === 'Digitalização com Sucesso'
    ) {
      if (maxCreationDate) {
        const date1 = new Date(maxCreationDate);
        const date2 = new Date(document.digitalization.creationDate);
        maxCreationDate =
          date1 < date2
            ? document.digitalization.creationDate
            : maxCreationDate;
      } else maxCreationDate = document.digitalization.creationDate;
    }
  });

  const headers = [
    { key: 'product', name: 'Product' },
    { key: 'process', name: 'Process' },
    { key: 'investType', name: 'Invest Type' },
    { key: 'user', name: 'User' },
    { key: 'deliveryType', name: 'Delivery Type' },
    { key: 'initialPremium', name: 'Initial Premium' },
    { key: 'frontendStatus', name: 'Frontend Status' },
    { key: 'regularPremium', name: 'Regular Premium' },
    { key: 'proposalStatus', name: 'Proposal Status' },
    { key: 'investmentOption', name: 'Investment Option' },
    { key: 'agent', name: 'Agent' },
    { key: 'canceled', name: 'Canceled' },
    { key: 'paymentConfirmation', name: 'Payment Confirmation' },
    { key: 'lastDocumentApproved', name: 'Last Document Approved' },
  ];

  const columns = [
    process.productDescription,
    process.id,
    process.investmentType === 'AN'
      ? 'New Subscription'
      : process.investmentType === 'EA'
      ? 'Entrega Adicional'
      : '',
    process.context.userEmail,
    process.investment.deliveryType,
    `${process.investment.initialPremium}€`,
    process.state === 1
      ? 'Investimento'
      : process.state === 2
      ? 'Dados do Tomador'
      : process.state === 3
      ? 'Dados adicionais de Investimento'
      : process.state === 4
      ? 'Resumo das condições'
      : process.state === 5
      ? 'Formalização'
      : process.state === 6
      ? 'Confirmação'
      : 'Pagamento',
    '',
    process.proposalStatus,
    process.investment.optionId,
    process.context.agentCode,
    process.canceled ? 'true' : 'false',
    maxStatusDate,
    maxCreationDate,
  ];

  if (process.investmentType === 'AN') {
    headers.push(
      { key: 'proposal', name: 'Proposal' },
      { key: 'policy', name: 'Policy' }
    );
    columns.push(process.proposalNumber, process.policyNumber);
  }

  if (process.investmentType === 'EA') {
    headers.push({ key: 'policyToReinforce', name: 'Policy to Reinforce' });
    columns.push(process.policyToReinforce);
  }

  if (process.productCode === 'WIUNLN21FEM') {
    headers.push(
      { key: 'commercialPer', name: 'Commercial Período' },
      { key: 'reservation', name: 'Reservation nº' }
    );
    columns.push('', '');
  }

  if (process.canceled) {
    headers.push({ key: 'cancelationStep', name: 'Cancelation Step' });
    columns.push(process.cancellation_step);
  }

  return {
    headers: headers,
    columns: columns,
  };
};

export const buildTimeLine = (process: ProcessInterface) => {
  const timeLine = [{ key: 'process', value: process.startDate }];

  if (process.investmentType === 'AN') {
    timeLine.push(
      { key: 'proposal', value: process.proposalCreationDate },
      { key: 'policy', value: process.policyCreationDate }
    );
  }

  if (process.investmentType === 'EA')
    timeLine.push({
      key: 'policyToReinforce',
      value: process.unsolicitedPaymentCreationDate,
    });

  if (process.canceled)
    timeLine.push({ key: 'canceled', value: process.cancelDate });

  return timeLine;
};
