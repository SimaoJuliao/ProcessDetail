import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Loader } from 'renderer/components/Loader/loader';
import useLoader from 'renderer/hooks/loader';
import { getLog } from 'renderer/services/processDetail/getLog/getLog';
import { getProcess } from 'renderer/services/processDetail/getProcess/getProcess';
import { ProcessPayload } from 'renderer/services/processDetail/getProcess/interfaces/processInterfaces';
import { getTransferLog } from 'renderer/services/processDetail/getTransferLog/getTransferLog';
import { updateLogs } from 'renderer/store/log/actions/actions';
import { updateProcess } from 'renderer/store/process/actions/actions';
import initialState from 'renderer/store/process/initialState';
import { updateTransferLog } from 'renderer/store/transferLog/actions/actions';
import { Search } from './components/search/search';
import { Tabs } from './components/tabs/tabs';
import { ShowErrorsInterface } from './interfaces';
import useNotification from 'renderer/hooks/useNotification';

export const ProcessDetailPage: React.FC = () => {
  const dispatch = useDispatch();
  const [showErrors, setShowErrors] = useState<ShowErrorsInterface>({
    valid: false,
    message: '',
  });
  const { isLoading, toggleLoader } = useLoader();
  const { addNotification } = useNotification();

  const showError = (message: string) => {
    setShowErrors({ valid: true, message: message });
    dispatch(updateProcess(initialState));
    dispatch(updateTransferLog([]));
    dispatch(updateLogs([]));
  };

  const getProcessData = async (searchNumber: string) => {
    const regExp = /[a-zA-Z]/g;
    let payload: ProcessPayload;

    if (!searchNumber) {
      showError('Please, Enter a number!');
      addNotification('danger', 'Please, Check the input!');
      return;
    }

    setShowErrors({ valid: false, message: '' });

    if (regExp.test(searchNumber)) {
      payload = {
        proposalNumber: searchNumber, // 2ULP001831  2ULP001816             2ULP004329    2ULP004327
      };
    } else {
      payload = {
        processId: searchNumber, // 300006349    300006248    400004555
      };
    }

    toggleLoader();
    const response = await getProcess(payload);
    toggleLoader();

    if (response.hasError) {
      addNotification('danger', response.errorMessage);
      return;
    }

    await getTransferLogsData(response.data.process.id);
    await getLogsData(response.data.process.id);

    dispatch(updateProcess(response.data.process));

    addNotification('success', 'Successfully Acquired Process!');
  };

  const getTransferLogsData = async (id: string) => {
    toggleLoader();
    const response = await getTransferLog(id);
    toggleLoader();

    if (response.hasError) {
      addNotification('danger', response.errorMessage);
      return;
    }

    dispatch(updateTransferLog(response.data.logs));
  };

  const getLogsData = async (id: string) => {
    toggleLoader();
    const response = await getLog(id);
    toggleLoader();

    if (response.hasError) {
      addNotification('danger', response.errorMessage);
      return;
    }

    dispatch(updateLogs(response.data.logs));
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      <Search getProcessData={getProcessData} showErrors={showErrors} />
      <Tabs />
    </>
  );
};
