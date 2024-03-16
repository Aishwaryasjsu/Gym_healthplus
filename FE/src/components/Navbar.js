import Logo from "../assets/images/Logo.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../css/NavBar.css";
import useAuth from "../hooks/useAuth";
import routes from "../util/routes";


const NavBar = () => {
  const { authed } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="30"
            height="30"
            style={{ marginRight: "10px" }}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          Gymbaroo
        </Navbar.Brand>
        {authed ?
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link href={routes.memberProfile} className="neon">
                  Profile
                </Nav.Link>
                <Nav.Link href={routes.memberLogs} className="neon">
                  Training Logs
                </Nav.Link>
                <NavDropdown title="Classes" className="neon" id="basic-nav-dropdown">
                  <NavDropdown.Item href={routes.enrollClass}>Enroll Classes</NavDropdown.Item>
                  <NavDropdown.Item href={routes.memberHome}>View Classes</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href={routes.logout} className="neon">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          :
          <Nav>
            <Nav.Link href={routes.employeeLogin} className="neon">
              Employee Login
            </Nav.Link>
            <Nav.Link href={routes.memberLogin} className="neon">
              Login
            </Nav.Link>
          </Nav>

        }

      </Container>
    </Navbar>
  );
};

export default NavBar;
