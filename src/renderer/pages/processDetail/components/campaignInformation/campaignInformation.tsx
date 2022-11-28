import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { ProcessInterface } from 'renderer/store/process/interfaces/processInterface';
import { buildCampaign } from './helpers';

export interface CampaignImformationPropsInterface {
  process?: ProcessInterface;
}

interface HeadersInterface {
  key: string;
  name: string;
}

export const CampaignImformationPage: React.FC<
  CampaignImformationPropsInterface
> = ({ process }) => {
  const [campaign, setCampaign] = useState<{
    headers: HeadersInterface[];
    columns: string[];
  }>();

  useEffect(() => {
    if (process) setCampaign(buildCampaign(process));
  }, [process]);

  return (
    <Row className="mt-3 justify-content-center">
      <Col sm="8">
        <Card className="rounded bg-light">
          <CardBody>
            <Row>
              {campaign &&
                campaign.headers.map((element, index) => (
                  <Col sm="6" className="mb-1">
                    <ListGroup>
                      <ListGroupItem className="d-flex px-2 bg-light">
                        <span className="font-weight-bold text-muted">
                          {element.name}
                        </span>
                        <span className="ml-auto text-right text-warning">
                          {campaign.columns[index]}
                        </span>
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
