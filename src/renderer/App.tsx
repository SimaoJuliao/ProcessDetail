import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ProcessDetailPage } from './pages/processDetail/processDetail';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { LoadingScreenPage } from './pages/loadingScreen/loadingScreen';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ReactNotifications />
      {/* <LoadingScreenPage /> */}
      <ProcessDetailPage />
    </Provider>
  );
};

export default App;
