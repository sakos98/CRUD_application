import styles from '../NavBar/NavBar.module.scss';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return <div className={styles.NavBar}>
     <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
        <Container>
          <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Blog.app</Nav.Link>
              <div className={styles.rightLink}>            
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to='/category'>Categories</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              </div>  
          </Nav>
        </Container>
      </Navbar>
  </div>
}

export default NavBar;