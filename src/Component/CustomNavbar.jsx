import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = () => {
  return (
    <div>
      <Router>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Shop">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/myaccount">
                My Account
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/" element={<Hero />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* </div> */}
      </Router>
    </div>
  );
};

export default CustomNavbar;
