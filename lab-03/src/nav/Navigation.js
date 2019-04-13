import React from 'react';
import PropTypes from 'prop-types';

// import NavLink!
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar>
        {/* tell Bootstrap: render our application name as a header */}
        <Navbar.Header>
          <Navbar.Brand>
            Timesheetz
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
          <NavItem><NavLink to="/employees">Employees</NavLink></NavItem>
          <NavItem><NavLink to="/timesheets">Timesheets</NavLink></NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;