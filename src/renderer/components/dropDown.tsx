import React, { useState, useEffect } from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';

type DropDownProps = {
  options: { id: string; value: string }[];
  defaultSelectedValue?: string;
  onValueChanged: (id: string, value: string) => void;
  value: string;
  theme?: string;
};

const DropDown: React.FC<DropDownProps> = (props) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret color={props.theme}>
        {props.value ? props.value : 'Choose Environment'}
      </DropdownToggle>
      <DropdownMenu>
        {props.options.map((option) => (
          <DropdownItem
            onClick={() => props.onValueChanged(option.id, option.value)}
          >
            {option.value}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default DropDown;
