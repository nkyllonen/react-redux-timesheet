import React from 'react';
import EmployeeRow from './EmployeeRow';
import { shallow } from 'enzyme';
import { isRegExp } from 'util';

describe('<EmployeeRow />', () => {
  let wrapper;

  beforeEach(() => {
    // dummy employee data
    const employee = {
      _id: 0,
      username: "A",
      email: "B",
      firstName: "C",
      lastName: "D",
      isAdmin: false
    };

    wrapper = shallow(<EmployeeRow employee={ employee }/>);
  });

  it('should instantiate the EmployeeRow Component', () => {
    expect(wrapper).toHaveLength(1); // look for 1 component
  });

  it('should render values into expect cells', () => {
    expect(wrapper.find('td')).toHaveLength(5);
    expect(wrapper.find('td').at(0).text()).toEqual('A');
    expect(wrapper.find('td').at(1).text()).toEqual('B');
    expect(wrapper.find('td').at(2).text()).toEqual('C');
    expect(wrapper.find('td').at(3).text()).toEqual('D');
    expect(wrapper.find('td').at(4).text()).toEqual('false');
  });
});
