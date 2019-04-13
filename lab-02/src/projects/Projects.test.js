import React from 'react';
import { shallow } from 'enzyme';

import Projects from './Projects';
import ProjectTable from './ProjectTable';

describe('<Projects />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Projects />);
  });

  // 1. one component rendered --> didn't blow up
  it('should instantiate the Project Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  // 2. 4 rows were rendered --> one for each empty projects item
  it('should pass projects down to table', () => {
    // enzyme will update the state to just have 4 empties
    wrapper.setState({
      projects: [{}, {}, {}, {}]
    });
    expect(wrapper.find(ProjectTable).prop('projects')).toHaveLength(4);
  });
});