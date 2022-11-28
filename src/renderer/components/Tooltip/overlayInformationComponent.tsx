import React from 'react';
import {
  PopoverBody,
  PopoverHeader,
  Tooltip,
  UncontrolledPopover,
  UncontrolledTooltip,
} from 'reactstrap';

export interface OverlayInformationComponentPropsInterface {
  message: string;
  target: string;
}

export const OverlayInformationComponent: React.FC<
  OverlayInformationComponentPropsInterface
> = ({ message, target }) => {
  return (
    <UncontrolledTooltip
      placement="right"
      target={target}
      className="text-white"
      style={{ background: '#212529' }}
    >
      {message}
    </UncontrolledTooltip>
  );
};
