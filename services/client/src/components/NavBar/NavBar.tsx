import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const NavBar: React.FC = React.memo(() => {
    const history = useHistory(); 
    
    const routePush = (routeName: string) => {
        localStorage.removeItem('currentPage')
        history.push(routeName)
    }
    
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Posts feed</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                    
                    <Nav.Link onClick={()=> history.push('/')}>Home</Nav.Link>                             
                    <NavDropdown title="Blogs" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=> routePush('/blogs/startups')}>                            
                            Startups                            
                        </NavDropdown.Item> 
                        <NavDropdown.Item disabled>                            
                            Social                           
                        </NavDropdown.Item>           
                    </NavDropdown>
                    <NavDropdown title="Forums" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=> routePush('/forums/ideas')}>
                            Ideas
                        </NavDropdown.Item>   
                        <NavDropdown.Item disabled>
                            Technologies
                        </NavDropdown.Item> 
                        <NavDropdown.Item disabled>
                            Startups
                        </NavDropdown.Item>          
                    </NavDropdown>
                    <NavDropdown title="News" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=> routePush('/news/business')}>
                            Business
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={()=> routePush('/news/design')}>
                            Design
                        </NavDropdown.Item>
                        <NavDropdown.Item disabled>
                            Culture
                        </NavDropdown.Item>               
                    </NavDropdown>
                </Nav>        
            </Navbar.Collapse>
        </Navbar>
    )
});

export { NavBar }