import React from 'react';
import { shallow } from 'enzyme';

import ProjectTable from './ProjectTable';
import ProjectRow from './ProjectRow';

describe('<ProjectTable />', () => {
  let wrapper;

  beforeEach(() => {
    // "stubbed" project entries
    const projects = [{}, {}];
    wrapper = shallow(<ProjectTable projects={projects} />);
  });

  // 1. verify that the table renders without blowing up
  it('should instantiate the Project Table Component', () => {
    expect(wrapper).toHaveLength(1); // rendered 1 component
  });

  // 2. end up with two instances of the ProjectRow component
  //    being rendered (one for each project entry)
  it('should render a row for each project', () => {
    expect(wrapper.find(ProjectRow)).toHaveLength(2); // rendered 2!
  });
});