import React from 'react';
import EmployeeTable from './EmployeeTable';
import { shallow } from 'enzyme';
import EmployeeRow from './EmployeeRow';

describe('<EmployeeTable />', () => {
  let wrapper;

  beforeEach(() => {
    const employees = [{ _id: 1 }, { _id: 2 }];
    wrapper = shallow(<EmployeeTable employees = { employees }/>);
  });

  it('should instantiate the Employ Table Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render a row for each employee', () => {
    expect(wrapper.find(EmployeeRow)).toHaveLength(2);
  });
});
