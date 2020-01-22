import React from "react";
import {Navbar, Nav, Button, Form, FormControl, DropdownButton} from "react-bootstrap";
import "./style.css";
import WikipediaLogo from "./WikipediaLogo.svg";


const TopNav = () => {
    return(
        <Navbar bg="dark" expand="lg" className="Navbar-custom" fixed="top">
            {/* <Container> */}
            <img
                src={WikipediaLogo}
                width="45"
                height="45"
                className="d-inline-block align-top"
                alt="Wikipedia logo"
            />
            <Navbar.Text className="LogoTitle">Wikipedia</Navbar.Text>

            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Random Article</Nav.Link>
            <Nav.Link>Donations</Nav.Link>
            <Nav.Link>Current Events</Nav.Link>

            <Form inline>
                <FormControl type="text" placeholder="Search Wikipedia" className=" mr-sm-2" />
                <Button type="submit">Submit</Button>
            </Form>

            


            {/* </Container> */}
        </Navbar>
    )
}

export default TopNav;