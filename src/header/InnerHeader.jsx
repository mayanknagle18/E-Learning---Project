import React, { useEffect, useState } from 'react';  
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { Dropdown } from 'react-bootstrap';
import logoImage1 from "../assets/images/thumbnails/logo-gray-img.png";
import logoImage2 from "../assets/images/thumbnails/logo-white-img.png";
import userIcon1 from "../assets/images/icons/user-icon1.svg";
import { Link } from 'react-router-dom';

const InnerHeader = () => {
    const [onScrollBody, setOnScrollBody] = useState(false);  

    const handleOnScroll = () => {
        if (window.scrollY > 50) {
            setOnScrollBody(true);
        } else {
            setOnScrollBody(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleOnScroll);
        return () => {
        window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);
  return ( 
    <header className={onScrollBody ? "el_header el_header_scroll" : "el_header el_inner_header"}>
        <div className="el_container">
            <Navbar expand="lg"> 
                <Navbar.Brand href="#">
                    <img src={logoImage1} className="el_logo_header1" alt="logo img 1"/>
                    <img src={logoImage2} className="el_logo_header2" alt="logo img 2"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/courses">Courses</Nav.Link>  
                        <Nav.Link as={Link} to="#careeers">Careeers</Nav.Link>  
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>  
                        <Nav.Link as={Link} to="#about-us">About Us</Nav.Link>  
                    </Nav> 
                    <div className="el_header_dropdown">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                <div className="el_header_userimg">
                                    <img src={userIcon1} alt="user img"/>
                                </div>
                                <h5>John Doe</h5>
                            </Dropdown.Toggle> 
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Navbar.Collapse> 
            </Navbar>
        </div>
    </header>
  )
}

export default InnerHeader