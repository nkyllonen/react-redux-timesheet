import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import FieldWrapper from '../form/FieldWrapper';
import FormControls from '../form/FormControls';

class EmployeeForm extends React.Component {

  validate = (values) => {
    const errors = {};
  
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
  
    return errors;
  };
  
  

  // handleSave: the callback to call when the user submits the form
  //  - not actually implementing the save function
  //  - the component that uses this form implements and passes it in as a prop
  handleSave = (values) => {
    this.props.handleSave(values);
  };

  render() {
    const { employee } = this.props;
  
    return (
      // define the Form element and integrate it with Formik
      <Formik
        // initial values to populate the form --> input current employee data of editting
        initialValues={ employee && {
          username: employee.username || '',
          email: employee.email || '',
          firstName: employee.firstName || '',
          lastName: employee.lastName || '',
          admin: employee.admin || '',
          _id: employee._id
        } }
        // hooks to call functions for validation and submission
        validate={ this.validate }
        onSubmit={ this.handleSave }
        enableReinitialize          // hint for Formik to refresh when we give it new data
      >
        {/* render-props: values and functions provided by Formik */}
        { ({ isValid, errors, touched, handleReset, handleSubmit }) => (
          <Form>
            <FieldWrapper type="text" name="username" label="Username" invalid={errors.username} touched={touched.username} />
            <FieldWrapper type="text" name="email" label="Email" invalid={errors.email} touched={touched.email} />
            <FieldWrapper type="text" name="firstName" label="First Name" invalid={errors.firstName} touched={touched.firstName} />
            <FieldWrapper type="text" name="lastName" label="Last Name" invalid={errors.lastName} touched={touched.lastName} />
            <FieldWrapper type="checkbox" name="admin" label="Admin" invalid={errors.admin} touched={touched.admin} />

            <FormControls
              allowSubmit={isValid} // isValid: Formik-supplied value --> enable submit if entire form is valid
              onSubmit={handleSubmit}
              onReset={handleReset}
            />
          </Form>
        )}
      </Formik>
    );
  }
}

EmployeeForm.propTypes = {
  employee: PropTypes.object,
  handleSave: PropTypes.func
};

export default EmployeeForm;
