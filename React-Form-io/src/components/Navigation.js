import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import logo from "../Light-Background.png";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <Image src={logo} style={{ height: "2.2rem" }}></Image> Regrow
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>
              <Link to="Renderer">Renderer </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="AddTutorial">form Builder </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="list">FormList </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
