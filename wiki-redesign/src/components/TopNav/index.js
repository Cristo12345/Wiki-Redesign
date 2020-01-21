import React from "react";
import {Navbar} from "react-bootstrap";
import "./style.css";
import WikipediaLogo from "./WikipediaLogo.svg";


const TopNav = () => {
    return(
        <Navbar bg="dark" expand="lg" className="Navbar-custom">
            <Navbar.Brand>Wikipedia</Navbar.Brand>
            <img
                src={WikipediaLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Wikipedia logo"
            />


        </Navbar>
    )
}

export default TopNav;