import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarApp = () => {
    const total = 25000;
    const token = false;

    return (
        <Navbar collapseOnSelect expand="lg" className="custom-navbar" sticky="top">
            <Container>
                <Navbar.Brand className="text-white">                 
                    Pizzería Mamma Mia!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className='boton1 text-white'>🍕Home</Nav.Link>
                        {token ? (
                        <Nav.Link className='boton1 text-white' href="#">🔓Profile</Nav.Link>
                        ) : (
                        <Nav.Link className='boton1 text-white' href="#">🔐Login</Nav.Link>
                        )}
                        {token ? (
                        <Nav.Link className='boton1 text-white' href="#">🔒Logout</Nav.Link>
                        ) : (
                        <Nav.Link className='boton1 text-white' href="#">🔐Register</Nav.Link>
                        )}
                    </Nav>
                    <Nav>
                        <Nav.Link className="boton2 text-primary" href="#" >🛒Total: ${total.toLocaleString()}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarApp;