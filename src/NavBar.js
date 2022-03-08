
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from 'react-router-dom';

const NavBar=()=>
{
  return (
    <header id="header" className="fixed-top header-transparent nav-bg">
    <Navbar  expand="lg" className="container d-flex align-items-center justify-content-between me-1">
    <Container  fluid>
    <a href="/">
    <img src={null}   style={{ height: '20px' }}  alt="logo" />
    </a>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="ms-auto flex-nowrap my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
        <NavDropdown title="Solutions" className="me-5 text-light" style={{color:"#fff"}} renderMenuOnMount={true}>
            <NavDropdown.Item as={Link} to="/turnkey-solution">Turnkey Solution</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/white-label-solution">White Label Solution</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/api-solution">API Solution</NavDropdown.Item>  
            <NavDropdown.Item as={Link} to="/retail-betting-solution">Retail Solution</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/world-class-solutions">World Class Solutions</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Products" id="basic-nav-dropdown" className="me-5 text-light" style={{color:"#fff"}} renderMenuOnMount={true}>
          <NavDropdown.Item href="/SportsBettingSoftware">Sports Betting</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/gaming-suite">Gaming Suit</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/affilateandagentplatforms">Affilate Platforms</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/payment-solution">Payment Solution</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/notification-app">Notification App</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Services" id="basic-nav-dropdown" className="me-5 text-light" style={{color:"#fff"}} renderMenuOnMount={true}>
          <NavDropdown.Item href="/onilne-gaming">Onilne Gaming Licence</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/247-customer-support">24/7 Customer Support</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/marketing-services">Marketing Services</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/design-services">Design Services</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/gaming-sports">Sports Sponsorship</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/global-banking-solution">Global Banking Solution</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/gaming-services">Gaming Services</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} className="text-light me-5" to="/contact-us">Contact us</Nav.Link>
        <Nav.Link className="text-light me-5" href="#action1">EN</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  );
}

export default NavBar;
