import React from 'react';
import Employees from './Employees';
import { shallow } from 'enzyme';
import EmployeeTable from './EmployeeTable';

describe('<Employees />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Employees/>);
  });

  it('should instantiate the Employees Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should pass employees down to table', () => {
    wrapper.setState({
      employees: [{_id:0}, {_id:1}, {_id:2}, {_id:3}]
    });
    expect(wrapper.find(EmployeeTable).prop('employees')).toHaveLength(4);
  });
});
