import * as React from 'react';
import PropTypes from 'prop-types';
import EmployeeForm from './EmployeeForm';
import { withRouter } from 'react-router';
import Axios from 'axios';

const apiUrl = '/api/users';

const url = employeeId => {
  if (employeeId) {
    return `${apiUrl}/${employeeId}`;
  }
  return apiUrl;
};

export class EmployeeDetail extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  static defaultProps = {};

  // set up local state
  state = {
    employee: null
  };

  // fetch the employee data
  //  - call the API when the component mounts
  //  - set the local state with the employee object
  async componentDidMount() {
    const { match } = this.props;
    const { _id } = match.params;
    const { data: employee } = await Axios.get(url(_id)); // get employee id from url
    this.setState({ employee });
  }

  onUpdate = async employee => {
    const response = await Axios.put(url(employee._id), employee);
    return response.data;
  };

  onCreate = async employee => {
    const response = await Axios.post(url(employee._id), employee);
    return response.data;
  };

  handleSave = (values) => {
    const { history } = this.props;

    // Check to see if the record being saved already has an ID
    const result = values._id ? this.onUpdate(values) : this.onCreate(values);
    result.then(() => {
      history.push('/employees');
    });
  };

  render() {
    return (
      <div>
        <h1>Employee Detail</h1>
        <EmployeeForm
          employee={this.state.employee}
          handleSave={this.handleSave}
        />
      </div>
    );
  }
}

export default withRouter(EmployeeDetail);
