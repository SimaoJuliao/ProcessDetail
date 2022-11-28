import React, { useEffect, useRef, useState } from 'react';
import { Card, CardBody, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { OverlayInformationComponent } from 'renderer/components/Tooltip/overlayInformationComponent';
import { ProcessInterface } from 'renderer/store/process/interfaces/processInterface';
import {
  buildGeneralData,
  buildInformationMessage,
  buildTimeLine,
  InformationMessageInterface,
} from './helpers';

export interface GeneralDataImformationPropsInterface {
  process?: ProcessInterface;
}

interface HeadersInterface {
  key: string;
  name: string;
}

export const GeneralDataImformationPage: React.FC<
  GeneralDataImformationPropsInterface
> = ({ process }) => {
  const [generalData, setGeneralData] = useState<{
    headers: HeadersInterface[];
    columns: string[];
  }>();
  const [timeLine, setTimeLine] = useState<{ key: string; value: string }[]>();
  const [informationMessage, setInformationMessage] =
    useState<InformationMessageInterface>();

  useEffect(() => {
    if (process) {
      setGeneralData(buildGeneralData(process));
      setTimeLine(buildTimeLine(process));
      setInformationMessage(buildInformationMessage(process));
    }
  }, [process]);

  return (
    <Row className="mt-1">
      <Col>
        <Card className="rounded bg-light">
          <CardBody>
            <Row>
              {generalData &&
                generalData.headers.map((element, index) => (
                  <>
                    <Col
                      sm={
                        timeLine && timeLine.find((e) => e.key === element.key)
                          ? '3'
                          : '6'
                      }
                      className="mb-1"
                    >
                      <ListGroup
                        id={
                          element.key === 'proposal' ||
                          element.key === 'policy' ||
                          element.key === 'policyToReinforce' ||
                          element.key === 'canceled'
                            ? element.key
                            : undefined
                        }
                      >
                        <ListGroupItem className="d-flex px-2 bg-light">
                          <span className="font-weight-bold text-muted">
                            {element.name}
                          </span>
                          <span className="ml-auto text-right text-warning">
                            {generalData.columns[index]
                              ? generalData.columns[index]
                              : '-'}
                          </span>
                          {element.key === 'proposal' ||
                          element.key === 'policy' ||
                          element.key === 'policyToReinforce' ||
                          element.key === 'canceled' ? (
                            <OverlayInformationComponent
                              message={
                                informationMessage
                                  ? informationMessage[element.key]
                                  : ''
                              }
                              target={element.key}
                            />
                          ) : null}
                        </ListGroupItem>
                      </ListGroup>
                    </Col>
                    {timeLine && timeLine.find((e) => e.key === element.key) && (
                      <Col sm="3" className="mb-1">
                        <ListGroup>
                          <ListGroupItem className="d-flex px-2 justify-content-center bg-light">
                            <span className="text-warning">
                              {timeLine.find((e) => e.key === element.key)
                                ?.value
                                ? timeLine.find((e) => e.key === element.key)
                                    ?.value
                                : '-'}
                            </span>
                          </ListGroupItem>
                        </ListGroup>
                      </Col>
                    )}
                  </>
                ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
