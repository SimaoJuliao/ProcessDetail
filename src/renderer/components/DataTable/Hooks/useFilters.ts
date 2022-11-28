import { useState } from 'react';
import { FilterInterface } from '../interfaces/DataTableInterface';
import _ from 'lodash';

export interface UseFiltersInterface {
  components: FilterInterface[];
  state: FilterState[];
  changeFilterState: (name: string, newValue: any) => void;
}
export interface FilterState {
  name: string;
  value: any;
}
export const useFilters = (components: FilterInterface[]): UseFiltersInterface => {
  const [state, setFilterState] = useState<FilterState[]>(
    components.map((f) => ({ name: f.name, value: f?.defaultValue || '' })),
  );

  return {
    components,
    state,
    changeFilterState: (name: string, newValue: any) => {
      const newFilterState = _.cloneDeep(state).map((s) => {
        if (s.name === name) {
          s.value = newValue;
        }
        return s;
      });

      setFilterState(newFilterState);
    },
  };
};
