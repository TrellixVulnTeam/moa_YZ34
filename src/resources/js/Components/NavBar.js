import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from 'react-router-dom';
import '../assets/css/navbar.css';
const NavBar=(props)=>
{
  let logo = '/images/moa-logo.svg';
  if(props.logo){
    logo = '/images/'+props.logo;
  }
  let textClass = 'text-light';
  if(props.textClass){
    textClass = props.textClass;
  }
  let navbarStyle = {};
  if(props.bg){
    navbarStyle.background = `${props.bg}`;
  }
  if(props.borderBottom){
    navbarStyle.borderBottom = `${props.borderBottom}`;
  }
  return (
    <header id="header" className="fixed-top header-transparent">
    <Navbar  expand="lg" className="container-fluid nav-bg d-flex align-items-center justify-content-between me-1" style={navbarStyle}>
    <Container  fluid>
    <a href="/" className='navbar-brand'>
      <img src={logo} className="ps-sm-5" alt="moa logo" />
    </a>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="ms-auto flex-nowrap my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
        <NavDropdown title="Solutions" className={"me-5 no-arrow "+textClass} style={{color:"#fff"}} renderMenuOnMount={true}>
            <NavDropdown.Item className='px-5 py-2 mt-2 text-dark' as={Link} to="/turnkey-solution">Turnkey Solution</NavDropdown.Item>
            <NavDropdown.Item className='px-5 py-2' as={Link} to="/white-label-solution">White Label Solution</NavDropdown.Item>
            <NavDropdown.Item className='px-5 py-2' as={Link} to="/api-solution">API Solution</NavDropdown.Item>  
            <NavDropdown.Item className='px-5 py-2' as={Link} to="/retail-betting-solution">Retail Solution</NavDropdown.Item>
            <NavDropdown.Item className='px-5 py-2' as={Link} to="/world-class-solutions">World Class Solutions</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Products" id="basic-nav-dropdown" className={"me-5 no-arrow "+textClass} style={{color:"#fff"}} renderMenuOnMount={true}>
          <NavDropdown.Item className='px-5 py-2 mt-2' href="/SportsBettingSoftware">Sports Betting</NavDropdown.Item>
          <NavDropdown.Item className='px-5 py-2' as={Link} to="/gaming-suite">Gaming Suit</NavDropdown.Item>
          <NavDropdown.Item className='px-5 py-2' as={Link} to="/affilateandagentplatforms">Affilate Platforms</NavDropdown.Item>
          <NavDropdown.Item className='px-5 py-2' as={Link} to="/payment-solution">Payment Solution</NavDropdown.Item>
          <NavDropdown.Item className='px-5 py-2' as={Link} to="/notification-app">Notification App</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Services" id="basic-nav-dropdown" className={"me-5 no-arrow "+textClass} style={{color:"#fff"}} renderMenuOnMount={true}>
          <NavDropdown.Item className='px-5 py-2 mt-2' href="/onilne-gaming">Onilne Gaming Licence</NavDropdown.Item>
          <NavDropdown.Item className='px-5 py-2' as={Link} to="/247-customer-support">24/7 Customer Support</NavDropdown.Item>
          <NavDropdown.Item className='px-5 py-2' as={Link} to="/marketing-services">Marketing Services</NavDropdown.Item>
          <NavDropdown.Item className='px-5 py-2' as={Link} to="/design-services">Design Services</NavDropdown.Item>
          <NavDropdown.Item className='px-5 py-2' as={Link} to="/gaming-sports">Sports Sponsorship</NavDropdown.Item>
          <NavDropdown.Item className='px-5 py-2' as={Link} to="/global-banking-solution">Global Banking Solution</NavDropdown.Item>
          <NavDropdown.Item className='px-5 py-2' as={Link} to="/gaming-services">Gaming Services</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Contact Us" id="basic-nav-dropdown" className={"me-5 no-arrow "+textClass} style={{color:"#fff"}} renderMenuOnMount={true}>
          <NavDropdown.Item className='px-5 py-2 mt-2 mb-2' href="/about-us">About Us</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="EN" id="basic-nav-dropdown" className={"me-5 "+textClass} style={{color:"#fff"}} renderMenuOnMount={true}>
          <NavDropdown.Item href="EN">EN</NavDropdown.Item>
          <NavDropdown.Item href="KR">KR</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  );
}

export default NavBar;
