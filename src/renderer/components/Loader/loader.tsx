import { useState } from 'react';
// import { Modal, ModalBody, Spinner } from 'reactstrap';
import { Modal, ModalBody, Spinner } from 'reactstrap';

type LoaderProps = {
  isLoading: boolean;
};

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return isLoading ? (
    <>
      <div>
        <Modal isOpen={isLoading} centered={true} size="sm">
          <ModalBody className="bg-light rounded border border-success d-flex justify-content-center">
            <Spinner color="primary" children="" />
            <span className=" ml-3 visually-hidden text-primary h5">
              Loading
            </span>
          </ModalBody>
        </Modal>
      </div>
    </>
  ) : null;
};
