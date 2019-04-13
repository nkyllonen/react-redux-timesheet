import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import ProjectRow from './ProjectRow';

class ProjectTable extends React.Component {
  render () {
    const { projects } = this.props;

    return (
      <Table bordered striped>
        {/* header row for our table */}
        <thead>
          <tr>
            <th> Name </th>
            <th> Description </th>
          </tr>
        </thead>
        {/* content of our table */}
        <tbody>
          {/* render some rows! pass a new project prop into each row */}
          {/* giving React an ‘index’ in the form of key so it can efficiently render the list of items */}
          { projects.map(project => (
            <ProjectRow project = { project } key = { project._id } />
          )) }
        </tbody>
      </Table>
    );
  }
}

// default value if no projects are given to us
ProjectTable.defaultProps = {
  projects:   []
}

// enforce projects type
ProjectTable.propTypes = {
  projects:   PropTypes.array
}

export default ProjectTable;
