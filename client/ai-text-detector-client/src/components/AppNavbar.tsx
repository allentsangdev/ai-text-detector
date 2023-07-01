import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function AppNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href="#home">AI Text Content Detector</Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
