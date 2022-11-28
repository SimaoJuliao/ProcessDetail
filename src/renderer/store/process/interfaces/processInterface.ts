export interface ProcessInterface {
  id: string;
  proposalNumber: string;
  policyNumber: string;
  policyToReinforce: string;
  state: number;
  proposalStatus: string;
  productCode: string;
  productDescription: string;
  context: ContextInterface;
  canceled: boolean;
  cancelDate: string;
  cancellation_step: string;
  startDate: string;
  proposalCreationDate: string;
  policyCreationDate: string;
  unsolicitedPaymentCreationDate: string;
  payments: PaymentsInterface[];
  documentation: DocumentationInterface;
  investment: InvestmentInterface;
  investmentType: string;
  taker: TakerInterface;
  insuredPeople: InsuredPeopleInterface[];
  signatureType: string;
  serviceRequests: ServiceRequestsInterface[];
}

// Context
export interface ContextInterface {
  agentCode: string;
  userEmail: string;
}

// Payment
export interface PaymentsInterface {
  statusDate: string;
  moment: string;
  status: string;
  type: string;
}

// Documents
export interface DocumentationInterface {
  documentKeys: DocumentKeys[];
}

export interface DocumentKeys {
  digitalization: Digitalization;
  docDescription: string;
  fiscalNumber: string;
}

export interface Digitalization {
  creationDate: string;
  status: string;
  opticalKey: string;
}

// Investment
export interface InvestmentInterface {
  discount: Discount;
  deliveryType: string;
  initialPremium: string;
  optionId: string;
  fundOwners: FundOwner[];
}

export interface Discount {
  campaignDescription: string;
  subscriptionChargesPercentage: string;
  subscriptionChargesPeriodicPercentage: string;
  agentChargesPercentage: string;
  agentChargesPeriodicPercentage: string;
}

export interface FundOwner {
  name: string;
  vatNumber: string;
  externalId: string;
  //Missing risk level
  //Missing riskLevelDesc
  //Missing riskLevelAdequate
}

// Taker
export interface TakerInterface {
  name: string;
  vatNumber: string;
  externalId: string;
  companyOwners: CompanyOwners[];
  riskLevel: string;
  riskLevelDesc: string;
  riskLevelAdequate: boolean;
}

export interface CompanyOwners {
  name: string;
  vatNumber: string;
  externalId: string;

  //Missing risk level
  //Missing riskLevelDesc
  //Missing riskLevelAdequate
}

// Insured People
export interface InsuredPeopleInterface {
  name: string;
  vatNumber: string;
  externalId: string;
  beneficiaries: BeneficiaryInterface[];

  //Missing risk level
  //Missing riskLevelDesc
  //Missing riskLevelAdequate
}

export interface BeneficiaryInterface {
  name: string;
  vatNumber: string;
  externalId: string;
  legalRepresentatives: LegalRepresentative;
  //Missing risk level
  //Missing riskLevelDesc
  //Missing riskLevelAdequate
}

export interface LegalRepresentative {
  name: string;
  vatNumber: string;
  externalId: string;

  //Missing risk level
  //Missing riskLevelDesc
  //Missing riskLevelAdequate
}

// Service Request
export interface ServiceRequestsInterface {
  id: string;
  number: string;
  reference: string;
}
