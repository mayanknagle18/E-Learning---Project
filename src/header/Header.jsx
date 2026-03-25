import React, { useEffect, useState } from 'react'; 
import Form from 'react-bootstrap/Form'; 
import Navbar from 'react-bootstrap/Navbar'; 
import logoImage from "../assets/images/thumbnails/logo-white-img.png";
import { Link } from 'react-router-dom';

const Header = () => {
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
    // <header className="el_header">
    <header className={onScrollBody ? "el_header el_header_scroll" : "el_header"}>
        <div className="el_container">
            <Navbar expand="lg"> 
                <Navbar.Brand href="#">
                    <img src={logoImage} alt="logo img"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">  
                    <Form className="el_navbar_form"> 
                        <Link to="/login" className="el_btn el_white_btn el_btn_rounded">Login</Link>
                        <Link to="/login" className="el_btn el_secondary_btn el_btn_rounded" state={{tab: "register"}}>Sign Up</Link>
                    </Form> 
                </Navbar.Collapse> 
            </Navbar>
        </div>
    </header>
  )
}

export default Header;