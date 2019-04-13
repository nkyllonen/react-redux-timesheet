import React from 'react';            // React logic
import PropTypes from 'prop-types';   // define the types of properties our React logic expects

class ProjectRow extends React.Component {
  // render: return JSX
  render() {
    // const reference to a prop named 'project'
    const { project , key } = this.props;
    
    return (
      <tr>
        <td>{project.name}</td>
        <td>{project.description}</td>
      </tr>
    );
  }

}

// declare that this component expects a single prop named ‘project’
ProjectRow.propTypes = {
  project: PropTypes.object.isRequired,
  key:     PropTypes.number
};

// export the class we just built
export default ProjectRow;
