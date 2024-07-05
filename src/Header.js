import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(){
  return <>
    <Navbar expand="lg" className="bg-body-tertiary p-0">
      <Container fluid className='p-0 ps-3'>
        <Navbar.Brand href="#home">
          <img
            style={{
              height:"2.5rem"
            }}
            src={require("./logo/aes06_logo_aesflash_bornes_de_recharge_alpes_maritimes.png")}
            alt=''
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="w-100 justify-content-between space-between">
            <Nav.Link className='color-blue' href="#home">PARTENARIAT</Nav.Link>
            <NavDropdown className='color-blue' title="INSTALLATION" id="collapsible-nav-dropdown">
              <NavDropdown.Item className='color-blue' href="#action/3.1">PARTICULIER</NavDropdown.Item>
              <NavDropdown.Item className='color-blue' href="#action/3.2">COPROPRIETE</NavDropdown.Item>
              <NavDropdown.Item className='color-blue' href="#action/3.3">PROFESSIONNEL</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='color-blue' href="#link">COPROPRIETE</Nav.Link>
            <Nav.Link className='color-blue' href="#link">DEVIS</Nav.Link>
            <Nav.Link className='color-blue' href="#link">CONTACT</Nav.Link>
            <div
              className='d-flex flew-row'
            >
              <Nav.Link
                className='color-blue bg-lblue'
                href="#link"
              >
                <img
                  style={{
                    height:"2.5rem"
                  }}
                  src={require("./Ico/aes06_icone_connexion_bornes_de_recharge_alpes_maritimes.png")}
                  alt=''
                />
              </Nav.Link>
              <Nav.Link
                className='bg-blue'
                href="#link"
              >
                <img
                  style={{
                    height:"2.5rem"
                  }}
                  src={require("./Ico/aes06_icone_recherche_bornes_de_recharge_alpes_maritimes.png")}
                  alt=''
                />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}//src/Ico/aes06_icone_connexion_bornes_de_recharge_alpes_maritimes.png

export default Header