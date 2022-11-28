import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// reactstrap components
import {
  InputGroupText,
  Row,
  Col,
  InputGroup,
  Input,
  FormFeedback,
  FormGroup,
  Container,
} from 'reactstrap';
import DropDown from 'renderer/components/DropDown';
import { configuration } from 'renderer/services/configs/configuration';
import { updateEnvironment } from 'renderer/store/controls/actions/actions';
import { StoreInterface } from 'renderer/store/storeInterface';
import { ShowErrorsInterface } from '../../interfaces';

type SearchProcessProps = {
  getProcessData: (searchNumber: string) => void;
  showErrors: ShowErrorsInterface;
};

export const Search: React.FC<SearchProcessProps> = ({
  getProcessData,
  showErrors,
}) => {
  const [searchFocus, setSearchFocus] = React.useState<boolean>(false);
  const [searchNumber, setSearchNumber] = React.useState<string>('');
  // const [environment, setEnvironment] = React.useState<string>('TS');
  const dispatch = useDispatch();
  const environment: string = useSelector(
    (storeState: StoreInterface) => storeState.controls.environment
  );

  return (
    <Container fluid>
      <Row xs="2" className="d-flex mt-5">
        <Col className="d-flex justify-content-end">
          <DropDown
            options={[
              {
                id: 'TS',
                value: 'TS',
              },
              {
                id: 'PP',
                value: 'PP',
              },
            ]}
            value={environment}
            onValueChanged={(id, value) => {
              // setEnvironment(value);
              dispatch(updateEnvironment(value));
              configuration.updateConfiguration(id);
            }}
            theme="info"
          />
        </Col>
        <Col lg="8" className="d-flex justify-content-start mt-2">
          <FormGroup className="position-relative w-50">
            <InputGroup className={searchFocus ? 'input-group-focus' : ''}>
              <Input
                placeholder="Policy"
                type="text"
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
                className="bg-white"
                onChange={(e) => setSearchNumber(e.target.value)}
                invalid={showErrors.valid}
              ></Input>
              <FormFeedback className="ml-4" tooltip valid={!showErrors.valid}>
                {showErrors.message}
              </FormFeedback>
              <div className="input-group-append">
                <InputGroupText
                  style={{ backgroundColor: '#2CA8FF' }}
                  className={searchFocus ? ' pl-2 input-group-focus' : 'pl-2'}
                  onClick={() => {
                    getProcessData(searchNumber);
                  }}
                >
                  <i className="now-ui-icons ui-1_zoom-bold text-white" />
                </InputGroupText>
              </div>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    </Container>
  );
};
