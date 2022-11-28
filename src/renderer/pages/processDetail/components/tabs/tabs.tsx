import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { LogInterface } from 'renderer/store/log/interfaces/logInterface';
import { ProcessInterface } from 'renderer/store/process/interfaces/processInterface';
import { StoreInterface } from 'renderer/store/storeInterface';
import { TransferLogInterface } from 'renderer/store/transferLog/interfaces/transferLogInterface';
import { CampaignImformationPage } from '../campaignInformation/campaignInformation';
import { GeneralDataImformationPage } from '../generalDataInformation/generalDataInformation';
import { InformationTables } from '../informationTables/informationTables';

// export interface TabsPropsInterface {
//   process?: ProcessInterface;
// }

export const Tabs: React.FC = () => {
  const process: ProcessInterface = useSelector(
    (storeState: StoreInterface) => storeState.process
  );
  const transferLogs: TransferLogInterface[] = useSelector(
    (storeState: StoreInterface) => storeState.transferLogs
  );
  const logs: LogInterface[] = useSelector(
    (storeState: StoreInterface) => storeState.logs
  );

  const [pills, setPills] = React.useState('0');
  const headersTabs = [
    'General Data',
    'Campaign & Commissions',
    'People',
    'Documents',
    'Payment',
    'Service Request GP',
    'Policy Creation Details History',
    'Logs',
  ];

  return (
    <div className="section-tabs mt-4">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto">
            <Card>
              <CardHeader>
                <Nav
                  className="nav-tabs-neutral justify-content-center"
                  data-background-color="blue"
                  role="tablist"
                  tabs
                >
                  {headersTabs.map((header, index) => (
                    <NavItem>
                      <NavLink
                        className={pills === index.toString() ? 'active' : ''}
                        // href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills(index.toString());
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        {header}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </CardHeader>
              <CardBody>
                {process?.id && (
                  <TabContent className="text-center" activeTab={pills}>
                    <TabPane tabId={'0'}>
                      <GeneralDataImformationPage process={process} />
                    </TabPane>
                    <TabPane tabId={'1'}>
                      <CampaignImformationPage process={process} />
                    </TabPane>
                    <InformationTables currentTab={pills} />
                  </TabContent>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
