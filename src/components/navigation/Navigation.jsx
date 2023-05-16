import { Container, Nav, Navbar, Button, Form } from "react-bootstrap";
import { PAGES } from "../../router";
import PropTypes from "prop-types";
import { RootContext } from "../../layouts/RootLayout";
import { useContext } from "react";
import { Form as DomForm } from "react-router-dom";

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
        <Navbar.Brand className="text-uppercase" href="/">
          {import.meta.env.VITE_SITE_NAME}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            {PAGES.map((page, index) => {
              return (
                <Nav.Link key={index} href={page.url}>
                  {page.name}
                </Nav.Link>
              );
            })}
          </Nav>
          <DomForm className="d-flex">
            <Form.Control type="search" className="mx-2" name="query" />
            <Button variant={isDarkMode ? "light" : "dark"} type="submit">
              Search
            </Button>
          </DomForm>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Navigation.propTypes = {
  isDarkMode: PropTypes.bool,
  setIsDarkMode: PropTypes.func,
};
