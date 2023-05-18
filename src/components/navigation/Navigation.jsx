import { Container, Nav, Navbar } from "react-bootstrap";
import { PAGES } from "../../router";
import PropTypes from "prop-types";
import { RootContext } from "../../layouts/RootLayout";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const { isDarkMode } = useContext(RootContext);

  return (
    <Navbar
      bg={isDarkMode ? "dark" : "light"}
      variant={isDarkMode ? "dark" : "light"}
      expand="lg"
      className={`border border-start-0 border-end-0 border-${
        isDarkMode ? `light` : `dark`
      }`}
    >
      <Container>
        <Link className="navbar-brand text-uppercase" to="/">
          {import.meta.env.VITE_SITE_NAME}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            {PAGES.map((page, index) => {
              return (
                <NavLink className="nav-link" key={index} to={page.url}>
                  {page.name}
                </NavLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Navigation.propTypes = {
  isDarkMode: PropTypes.bool,
  setIsDarkMode: PropTypes.func,
};
