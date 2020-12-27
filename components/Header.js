import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

function Header ({ destinations }) {
  console.log("Destinations:")
  console.log(destinations)
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="header">
      <Navbar.Brand className="brand" href="/">birdie</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav className="right-nav">
          <NavDropdown title="destinations" id="basic-nav-dropdown">
            <NavDropdown.Item href="/destination/europe">europe</NavDropdown.Item>
            <NavDropdown.Item href="/destination/united-states">united states</NavDropdown.Item>
            <NavDropdown.Item href="/destination/mexico">mexico</NavDropdown.Item>
            <NavDropdown.Item href="/destination/india">india</NavDropdown.Item>
            <NavDropdown.Item href="/destination/asia">asia</NavDropdown.Item>
            <NavDropdown.Item href="/destination/caribbean">caribbean</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link href="/photo-journals">
              photo journals
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/itineraries">
              itineraries
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
