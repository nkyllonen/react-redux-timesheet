import React from 'react';
import { shallow } from 'enzyme';

import ProjectRow from './ProjectRow';

describe('<ProjectRow />', () => {
  let wrapper;
  
  beforeEach(() => {
    // setup the component that we're describing
    const project = {
      name: 'NAME',
      description: 'DESCRIPTION'
    };

    // shallowly render ProjectRow --> ONLY ProjectRow, no children
    //  - in-memory sandboxed “document” so that we can perform inquiries
    //  - shallow render is going to be created before each test we define
    //  - this may seem inefficient (why not just create it once?), but shallow renders are very fast and starting with a blank slate before each test can be helpful once your tests get complicated.
    wrapper = shallow(<ProjectRow project = { project }/>);
  });

  // Tests!
  // 1. verify that the ProjectRow component renders without blowing up
  it('should instantiate the Project Row Component', () => {
    expect(wrapper).toHaveLength(1); // rendered 1 component
  });
  
  // 2. tests that the expected values are rendered into the table cells
  it('should render values into expected cells', () => {
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('NAME');
    expect(wrapper.find('td').at(1).text()).toEqual('DESCRIPTION');
  });

});
