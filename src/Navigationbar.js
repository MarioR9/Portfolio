import React from 'react';
import { Navbar, Dropdown } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react'


export default class Navigationbar extends React.Component{
    
    render(){
     return(
         <div id="navbar" class="navbarlogo">
            
        <Navbar fixed="top">
            <Navbar.Brand href="/home">___Mario Rodriguez___</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <Dropdown alignRight >
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                <Icon size='big' name='bars'/>  
                </Dropdown.Toggle>
                <Dropdown.Menu id="mySidenav" class="sidenav">
                    <Dropdown.Item onClick={this.props.close} href="#about"><Icon size='large' name='user outline'/>About</Dropdown.Item>
                    <Dropdown.Item onClick={this.props.close} href='#project'><Icon size='large' name='clone outline'/>Projects</Dropdown.Item>
                    <Dropdown.Item onClick={this.props.close} href="#contact"><Icon size='large' name='mail outline'/>Contact</Dropdown.Item>
                    <Dropdown.Item href="/Resume.pdf" download="Mario_Rodriguez_Resume"><Icon size='large' name='file pdf outline'/>Resume</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
            
         </div>
     )
    }
}



