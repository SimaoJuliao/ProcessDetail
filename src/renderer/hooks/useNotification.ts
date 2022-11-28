import { Store } from 'react-notifications-component';

const useNotification = () => {
  const handleAddNotification = (
    type: 'success' | 'danger' | 'info' | 'default' | 'warning',
    message: string
  ) => {
    Store.addNotification({
      title:
        type === 'success'
          ? 'Success!'
          : type === 'danger'
          ? 'Error!'
          : type === 'info'
          ? 'Info!'
          : type === 'warning'
          ? 'Warning!'
          : '',
      message: message,
      type: type,
      insert: 'top',
      container: 'top-right',
      // animationIn: ['animate__animated', 'animate__fadeIn'],
      // animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  };

  return { addNotification: handleAddNotification };
};

export default useNotification;
