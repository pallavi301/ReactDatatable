import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import React from 'react';

import EmployeesTable from './components/EmployeesTable';

function App() {

  return (
    <>
    
    <div className="App">
      <Navbar bg="myPink" fixed = "top">
        
        <Navbar.Brand>
          <h2>Get Supermind</h2> 
        </Navbar.Brand>

        <Nav>
          <NavDropdown title="Profile">
            <NavDropdown.Item href="profile/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="profile/signout">Sign Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>

      </Navbar>
      <div className="content">
        
      </div>
      
    </div>
    <EmployeesTable />
    </>
    
  );
}

export default App;
     