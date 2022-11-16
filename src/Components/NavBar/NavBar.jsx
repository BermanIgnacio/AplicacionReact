import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"

function NavBar() {
    return(
      <Navbar className='navbar whiteFont'>
      <Container>
        <Navbar.Brand className="weight" as={Link} to="/">eCommerce - Home</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className="weight" as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link className="weight" as={Link} to="/login">Login</Nav.Link>
            <Nav.Link className="weight" as={Link} to="/signup">SignUp</Nav.Link>
            <NavDropdown title="Producto" id="nav-dropdown" className="weight">
              <Nav.Link className="weight" as={Link} to="/product/alta">Agregar</Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar