import { buildColumn } from 'renderer/components/DataTable/helpers';
import { ProcessInterface } from 'renderer/store/process/interfaces/processInterface';
import { DataTableInterface, HeadersTableInterface } from './interfaces';

export const buildHeadersPeople = () => {
  const columnHeaders: HeadersTableInterface[] = [
    buildColumn('Role', 'role'),
    buildColumn('Name', 'name'),
    buildColumn('Vat Number', 'vatNumber'),
    buildColumn('External Id', 'externalId'),
    buildColumn('Risk Level', 'riskLevel'),
    buildColumn('Risk Level Description', 'riskLevelDescription'),
    buildColumn('Risk Level Adequate', 'riskLevelAdequate'),
  ];

  return columnHeaders;
};

export const buildDataPeople = (process: ProcessInterface) => {
  const data: DataTableInterface[] = [];
  //   Taker
  data.push({
    role: 'Taker',
    name: process.taker.name,
    vatNumber: process.taker.vatNumber,
    externalId: process.taker.externalId,
    riskLevel: process.taker.riskLevel.toString(),
    riskLevelDesc: process.taker.riskLevelDesc,
    riskLevelAdequate: process.taker.riskLevelAdequate ? 'True' : 'False',
  });

  //   Company Owner
  process.taker.companyOwners &&
    process.taker.companyOwners.forEach((companyOwner) => {
      data.push({
        role: 'Company Owner',
        name: companyOwner.name,
        vatNumber: companyOwner.vatNumber,
        externalId: companyOwner.externalId,
        riskLevel: '',
        riskLevelDesc: '',
        riskLevelAdequate: '',
      });
    });

  //   Insured Person
  process.insuredPeople.forEach((people) => {
    data.push({
      role: 'Insured Person',
      name: people.name,
      vatNumber: people.vatNumber,
      externalId: people.externalId,
      riskLevel: '',
      riskLevelDesc: '',
      riskLevelAdequate: '',
    });

    // Beneficiary
    people.beneficiaries.forEach((beneficiary) => {
      data.push({
        role: 'Beneficiary',
        name: beneficiary.name,
        vatNumber: beneficiary.vatNumber,
        externalId: beneficiary.externalId,
        riskLevel: '',
        riskLevelDesc: '',
        riskLevelAdequate: '',
      });

      // Legal Representative
      beneficiary.legalRepresentatives &&
        beneficiary.legalRepresentatives &&
        data.push({
          role: 'Legal Representative',
          name: beneficiary.legalRepresentatives.name,
          vatNumber: beneficiary.legalRepresentatives.vatNumber,
          externalId: beneficiary.legalRepresentatives.externalId,
          riskLevel: '',
          riskLevelDesc: '',
          riskLevelAdequate: '',
        });
    });
  });

  //   Fund Owner
  process.investment.fundOwners &&
    process.investment.fundOwners.forEach((fundOwner) => {
      data.push({
        role: 'Fund Owner',
        name: fundOwner.name,
        vatNumber: fundOwner.vatNumber,
        externalId: fundOwner.externalId,
        riskLevel: '',
        riskLevelDesc: '',
        riskLevelAdequate: '',
      });
    });

  return data;
};
